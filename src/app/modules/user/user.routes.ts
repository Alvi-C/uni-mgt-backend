import express from 'express';
import { UserControllers } from './user.controllers';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from '../student/student.validation';

const userRouter = express.Router();

userRouter
  .route('/create-student')
  .post(
    validateRequest(studentValidations.createStudentValidationSchema),
    UserControllers.createStudent,
  );
userRouter.route('/').get();
userRouter.route('/:id').get();

export default userRouter;
