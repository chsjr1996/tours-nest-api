import { Response } from 'express';
import {
  ExceptionFilter,
  ArgumentsHost,
  Catch,
  HttpStatus,
} from '@nestjs/common';
import { get } from 'lodash';
import errorResponseBuilder from 'src/common/builders/error-response/error-response.builder';

@Catch()
export default class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    return errorResponseBuilder(
      HttpStatus.INTERNAL_SERVER_ERROR,
      res,
      'Unknown error',
      get(exception, 'stack', {}),
    );
  }
}
