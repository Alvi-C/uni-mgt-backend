import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  const clientRequest = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      // validation check, if everything is allright, move to next middleware
      await schema.parseAsync({
        body: req.body,
      });

      next();
    } catch (error) {
      next(error);
    }
  };

  return clientRequest;
};

export default validateRequest;
