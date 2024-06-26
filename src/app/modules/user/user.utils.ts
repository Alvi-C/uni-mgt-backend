import { TAcademicSemester } from '../academicSemester/academicSemester.interface.';
import { UserModel } from './user.model';

// find last student id
const findLastStudentId = async () => {
  const lastStudent = await UserModel.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

// set auto generated id
export const generateStudentId = async (payload: TAcademicSemester) => {
  // first time 0000
  const currentId = (await findLastStudentId()) || (0).toString();
  // increment Id number
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};
