import { TStudent } from '../student/student.interface';
import { UserModel } from './user.model';
import config from '../../config';
import { TUser } from './user.interface';
import StudentModel from '../student/student.model';
import { AcademicSemesterModel } from '../academicSemester/academicSemester.model';
import { generateStudentId } from './user.utils';
import { TAcademicSemester } from '../academicSemester/academicSemester.interface.';

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  // if password is not given, use default password
  /*   if (!password) {
    password = config.default_password as string;
  } else {
      user.password = password;
  } */

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemesterModel.findById(
    studentData.admissionSemester,
  );

  // set auto generated id
  userData.id = await generateStudentId(admissionSemester as TAcademicSemester);

  // create a user
  const newUser = await UserModel.create(userData);
  // Handle the case where user creation fails (null is returned)
  if (!newUser) {
    throw new Error('Failed to create user'); // Or handle the error differently
  }

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
