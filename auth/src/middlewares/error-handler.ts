import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('something went wrong');
  res.send(400).json({
    message: 'Something went wrong',
  });
};
