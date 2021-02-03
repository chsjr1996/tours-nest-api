import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { ReviewController } from './controllers/review/review.controller';
import { TourController } from './controllers/tour/tour.controller';
import { UserController } from './controllers/user/user.controller';
import { ReviewService } from './services/review/review.service';
import { TourService } from './services/tour/tour.service';
import { UserService } from './services/user/user.service';

@Module({
  imports: [],
  controllers: [
    ReviewController,
    TourController,
    UserController,
    AuthController,
  ],
  providers: [ReviewService, TourService, UserService],
})
export class AppModule {}
