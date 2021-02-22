import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Tours API')
    .setDescription('Tours API Documentation')
    .setVersion('0.1.0')
    .setLicense(
      'MIT',
      'https://github.com/chsjr1996/tours-api/blob/main/LICENSE',
    )
    .addTag('auth', 'Auth endpoints to allow use API protected modules')
    .addTag('review', 'Review resource with data related with tours')
    .addTag('tour', 'Tour resource with main API data')
    .addTag('user', 'User resource with common and admins users')
    .addServer('http://localhost:3000', 'Development')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
};
