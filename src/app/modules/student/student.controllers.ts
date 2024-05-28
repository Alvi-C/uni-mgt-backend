import { StudentService } from './student.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  // call service function to get all students
  const result = await StudentService.getAllStudentsFromDB();

  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All students fetched successfully',
    data: {
      student: result,
    },
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  // get id from request params
  const studentId = req.params.id;

  // call service function to get a single student
  const result = await StudentService.getSingleStudentsFromDB(studentId);

  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student fetched successfully',
    data: {
      student: result,
    },
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const studentId = req.params.id;
  const result = await StudentService.deleteStudentFromDB(studentId);

  // send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: {
      student: result,
    },
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
