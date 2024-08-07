import { HttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

// eslint-disable-next-line no-unused-vars
export const errorHandlerMiddleware = (error, _req, res, _next) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
    });
  }

  if (error instanceof MongooseError) {
    return res.status(500).json({
      status: 500,
      message: 'Mongoose error',
      data: {
        message: error.message,
      },
    });
  }

  res.status(500).json({
    status: 500,
    message: 'Internal server error',
    data: {
      message: error.message,
    },
  });
};