import { Response } from 'express';
import {
  ExceptionFilter,
  ArgumentsHost,
  Catch,
  HttpStatus,
} from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import errorResponseBuilder from 'src/common/builders/error-response.builder';

@Catch(EntityNotFoundError)
export default class EntityNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    return errorResponseBuilder(
      res,
      'Not found',
      exception.message,
      HttpStatus.NOT_FOUND,
    );
  }
}
