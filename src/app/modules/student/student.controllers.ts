import { NextFunction, Request, Response } from 'express';
import { StudentService } from './student.services';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // call service function to get all students
    const result = await StudentService.getAllStudentsFromDB();
    // send response
    // res.status(200).json({
    //   status: 'success',
    //   length: result.length,
    //   message: 'All students fetched successfully',
    //   data: {
    //     students: result,
    //   },
    // });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All students fetched successfully',
      data: {
        student: result,
      },
    });
  } catch (error) {
    const typedError = error as Error;
    // console.log(typedError.message);
    // res.status(400).json({
    //   status: typedError.name || 'fail',
    //   message: typedError.message || 'Fetching students failed',
    //   error: typedError,
    // });
    next(typedError);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // get id from request params
    const studentId = req.params.id;
    // call service function to get a single student
    const result = await StudentService.getSingleStudentsFromDB(studentId);
    // send response
    // res.status(200).json({
    //   status: 'success',
    //   message: 'Student fetched successfully',
    //   data: {
    //     student: result,
    //   },
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student fetched successfully',
      data: {
        student: result,
      },
    });
  } catch (error) {
    const typedError = error as Error;
    // console.log(typedError.message);
    // res.status(400).json({
    //   status: typedError.name || 'fail',
    //   message: typedError.message || 'Fetching student failed',
    //   error: typedError,
    // });
    next(typedError);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const studentId = req.params.id;
    const result = await StudentService.deleteStudentFromDB(studentId);

    // res.status(200).json({
    //   status: 'success',
    //   message: 'Student deleted successfully!',
    //   data: null,
    // });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted successfully',
      data: {
        student: result,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
