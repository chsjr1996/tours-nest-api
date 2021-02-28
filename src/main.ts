import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import swaggerSetup from './swagger.setup';
import Filters from './common/exception-filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(...Filters);

  swaggerSetup(app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
