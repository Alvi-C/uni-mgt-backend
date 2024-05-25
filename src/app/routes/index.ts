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

// router.use('/api/v1/student', studentRouter);
// router.use('/api/v1/users', userRouter);

const moduleRoutes = [
  { path: '/api/v1/users', route: userRouter },
  { path: '/api/v1/student', route: studentRouter },
];

moduleRoutes.forEach(route => {
  router.use(route.path, route.route);
});

export default router;
