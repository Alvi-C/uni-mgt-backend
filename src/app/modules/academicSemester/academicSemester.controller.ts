import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.services';

const createAcademicSemester = catchAsync(async (req, res, next) => {
  // call service function to create a new academic semester
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  // send response
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Academic semester created successfully',
    data: {
      user: result,
    },
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
