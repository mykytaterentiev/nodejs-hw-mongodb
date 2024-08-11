import { HttpError } from 'http-errors';
import { MongooseError } from 'mongoose';

export const errorHandlerMiddleware = (error, _req, res) => {
  if (error instanceof HttpError) {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
      errors: error.data?.errors || [],  // Ensure the errors are included in the response
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
