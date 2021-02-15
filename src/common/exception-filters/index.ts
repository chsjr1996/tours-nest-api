import EntityNotFoundExceptionFilter from './entity-not-found.exception-filter';
import GlobalExceptionFilter from './global.exception-filter';
import ValidationExceptionFilter from './validation.exception-filter';
import QueryFailedFilter from './query-failed.exception-filter';

export default [
  new GlobalExceptionFilter(),
  new ValidationExceptionFilter(),
  new EntityNotFoundExceptionFilter(),
  new QueryFailedFilter(),
];
