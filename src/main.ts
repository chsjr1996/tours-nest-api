import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerSetup from './doc/swaggerSetup';
import GlobalExceptionFilter from './exception-filters/global.exception-filter';
import EntityNotFoundExceptionFilter from './exception-filters/entity-not-found.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  // Filters
  app.useGlobalFilters(
    new GlobalExceptionFilter(),
    new EntityNotFoundExceptionFilter(),
  );

  // Misc
  swaggerSetup(app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
