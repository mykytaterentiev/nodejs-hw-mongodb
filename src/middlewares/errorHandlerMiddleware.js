import { HttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

export const errorHandlerMiddleware = (error, _req, res, next) => {
  res.setHeader('Content-Type', 'application/json');

  if (error instanceof HttpError) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
      data: error.errors || null,
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

  next();
};
