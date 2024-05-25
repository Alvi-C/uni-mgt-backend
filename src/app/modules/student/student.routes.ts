import express from 'express';
import { StudentControllers } from './student.controllers';

const studentRouter = express.Router();

// studentRouter.route('/create-student').post(StudentControllers.createStudent);
studentRouter.route('/').get(StudentControllers.getAllStudents);
studentRouter
  .route('/:id')
  .get(StudentControllers.getSingleStudent)
  .delete(StudentControllers.deleteStudent);

export default studentRouter;
