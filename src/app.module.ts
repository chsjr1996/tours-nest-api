import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './controllers/auth/auth.controller';
import { ReviewController } from './controllers/review/review.controller';
import { TourController } from './controllers/tour/tour.controller';
import { UserController } from './controllers/user/user.controller';
import { User } from './models/user.model';
import { ReviewService } from './services/review/review.service';
import { TourService } from './services/tour/tour.service';
import { UserService } from './services/user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [User],
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [
    AuthController,
    ReviewController,
    TourController,
    UserController,
  ],
  providers: [ReviewService, TourService, UserService],
})
export class AppModule {}
