import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrorHandler;
