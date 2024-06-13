import mongoose from 'mongoose';
import { TErrorSources, TGenericErrorRedponses } from '../interface/error';

const handleCastError = (
  err: mongoose.Error.CastError,
): TGenericErrorRedponses => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid Id',
    errorSources,
  };
};

export default handleCastError;
