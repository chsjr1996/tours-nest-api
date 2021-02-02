import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerSetup from './doc/swaggerSetup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  swaggerSetup(app);

  await app.listen(3000);
}
bootstrap();
