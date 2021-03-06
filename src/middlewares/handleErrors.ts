import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';

export default function handleErrors(
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction,
): Response {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server error',
  });
}
