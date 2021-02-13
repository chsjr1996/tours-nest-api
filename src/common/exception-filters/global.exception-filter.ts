import { ExceptionFilter, ArgumentsHost, Catch } from '@nestjs/common';
import { Response } from 'express';
import { get } from 'lodash';

interface IError extends Error {
  statusCode: number;
  isOperational: boolean;
}

@Catch()
export default class GlobalExceptionFilter implements ExceptionFilter {
  parseError(err: unknown) {
    return {
      name: get(err, 'name', 'Error'),
      message: get(err, 'message', 'Unknown error'),
      stack: get(err, 'stack', {}),
      isOperational: get(err, 'isOperational', false),
      statusCode: get(err, 'statusCode', 500),
    };
  }

  productionError(err: IError, res: Response) {
    if (err.isOperational) {
      return res.status(err.statusCode || 500).json({
        userMsg: err.message,
        devMesg: '',
      });
    }
  }

  developmentError(err: IError, res: Response) {
    return res.status(err.statusCode || 500).json({
      userMsg: err.message,
      devMsg: err.stack,
    });
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    console.log('parsed', this.parseError(exception));

    if (process.env.NODE_ENV === 'production') {
      return this.productionError(this.parseError(exception), res);
    } else {
      return this.developmentError(this.parseError(exception), res);
    }
  }
}
