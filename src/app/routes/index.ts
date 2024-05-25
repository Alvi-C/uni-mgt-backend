import express, { Request, Response } from 'express';
import studentRouter from '../modules/student/student.routes';
import userRouter from '../modules/user/user.routes';

const router = express.Router();

// test route
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Test route is working!',
  });
});

// student route
router.use('/api/v1/student', studentRouter);
router.use('/api/v1/users', userRouter);

export default router;
