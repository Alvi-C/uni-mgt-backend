import { UserServices } from './user.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
// import studentValidationSchema from './student.validation';

const createStudent = catchAsync(async (req, res, next) => {
  // get data from request body
  const newStudent = req.body.student;
  const password = req.body.password;

  // call service function to create a new student
  const result = await UserServices.createStudentIntoDB(password, newStudent);
  // send response
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Student created successfully',
    data: {
      user: result,
    },
  });
});

export const UserControllers = {
  createStudent,
};
