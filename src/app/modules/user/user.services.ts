import { TStudent } from '../student/student.interface';
import { UserModel } from './user.model';
import config from '../../config';
import { TUser } from './user.interface';
import StudentModel from '../student/student.model';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, use default password
  /*   if (!password) {
    password = config.default_password as string;
  } else {
      user.password = password;
  } */

  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  // set manually generated id
  userData.id = '2030100001';

  // create a user
  const newUser = await UserModel.create(userData);

  // create a student
  if (Object.keys(newUser).length) {
    // set id and _id as user in student data
    studentData.id = newUser.id; // manually generated embedded id
    studentData.user = newUser._id; // reference _id of user

    // create a student
    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
