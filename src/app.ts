import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// cors
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// all routes
app.use(router);

// global error handler
app.use(globalErrorHandler);

// not found
app.use('*', notFound);

export default app;
