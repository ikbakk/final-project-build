import { Response } from 'express';
import { CustomErrors } from '../types/utils';

export const errorResponse = (err: CustomErrors, res: Response) => {
  const statusCode = err.statusCode ?? 500;
  const message = err.message ?? 'Something went wrong';
  const response = res.status(statusCode).json({ status: 'Failed', message });

  return response;
};
