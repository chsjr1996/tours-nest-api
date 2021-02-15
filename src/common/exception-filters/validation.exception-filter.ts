import { Response } from 'express';
import {
  ExceptionFilter,
  ArgumentsHost,
  Catch,
  BadRequestException,
} from '@nestjs/common';
import { get } from 'lodash';
import errorResponseBuilder from 'src/common/builders/error-response.builder';

@Catch(BadRequestException)
export default class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const exceptionResponse = exception.getResponse();

    return errorResponseBuilder(
      res,
      get(exceptionResponse, 'message', 'Unknown validation error'),
      exception.stack,
      exception.getStatus(),
    );
  }
}
