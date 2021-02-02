import { Module } from '@nestjs/common';
import { ReviewController } from './controllers/review/review.controller';
import { TourController } from './controllers/tour/tour.controller';
import { UserController } from './controllers/user/user.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { UserService } from './services/user/user.service';
import { TourService } from './services/tour/tour.service';
import { ReviewService } from './services/review/review.service';

@Module({
  imports: [],
  controllers: [
    ReviewController,
    TourController,
    UserController,
    AuthController,
  ],
  providers: [UserService, TourService, ReviewService],
})
export class AppModule {}
