import { ExceptionFilter, ArgumentsHost, Catch } from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { Response } from 'express';

@Catch(EntityNotFoundError)
export default class EntityNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const { Error } = ctx.getResponse<Response>();

    return Error('Not Found', exception.message, 404);
  }
}
