import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Natours Nest API')
    .setDescription('Natours API Documentation')
    .setVersion('0.0.1')
    .addTag('auth')
    .addTag('review')
    .addTag('tour')
    .addTag('user')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
};
