import EntityNotFoundExceptionFilter from './entity-not-found/entity-not-found.exception-filter';
import GlobalExceptionFilter from './global/global.exception-filter';
import ValidationExceptionFilter from './validation/validation.exception-filter';
import QueryFailedFilter from './query-failed/query-failed.exception-filter';

export default [
  new GlobalExceptionFilter(),
  new ValidationExceptionFilter(),
  new EntityNotFoundExceptionFilter(),
  new QueryFailedFilter(),
];
