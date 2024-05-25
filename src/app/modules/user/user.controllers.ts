import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
// import studentValidationSchema from './student.validation';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // get data from request body
    const newStudent = req.body.student;
    const password = req.body.password;

    // data validation using zod
    // const zodParsedData = studentValidationSchema.parse(newStudent);

    // call service function to create a new student
    const result = await UserServices.createStudentIntoDB(password, newStudent);
    // send response
    // res.status(201).json({
    //   status: 'success',
    //   message: 'Student created successfully',
    //   data: {
    //     student: result,
    //   },
    // });
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Student created successfully',
      data: {
        user: result,
      },
    });
  } catch (error) {
    const typedError = error as Error;
    // console.log(typedError.message);
    // res.status(500).json({
    //   status: typedError.name || 'fail',
    //   message: typedError.message || 'Student creation failed',
    //   error: typedError,
    // });
    next(typedError);
  }
};

export const UserControllers = {
  createStudent,
};
