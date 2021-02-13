import { ExceptionFilter, ArgumentsHost, Catch } from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm/error/EntityNotFoundError';
import { Response } from 'express';

@Catch(EntityNotFoundError)
export default class EntityNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    return res.status(404).json({
      userMsg: 'Not Found',
      devMesg: exception.message,
    });
  }
}
