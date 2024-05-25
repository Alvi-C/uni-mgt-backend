import express from 'express';
import { UserControllers } from './user.controllers';

const userRouter = express.Router();

userRouter.route('/create-student').post(UserControllers.createStudent);
userRouter.route('/').get();
userRouter.route('/:id').get();

export default userRouter;
