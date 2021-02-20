import { Response } from 'express';
import {
  ExceptionFilter,
  ArgumentsHost,
  Catch,
  HttpStatus,
} from '@nestjs/common';
import { QueryFailedError } from 'typeorm/error/QueryFailedError';
import errorResponseBuilder from 'src/common/builders/error-response/error-response.builder';

/**
 * @todo improve exception with specific DBMS errors like '23505' (duplicated field)
 */
@Catch(QueryFailedError)
export default class QueryFailedFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    return errorResponseBuilder(
      HttpStatus.INTERNAL_SERVER_ERROR,
      res,
      'Unknown error',
      exception.message,
    );
  }
}
