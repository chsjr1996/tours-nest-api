import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ReviewController } from './controllers/review/review.controller';
import { TourController } from './controllers/tour/tour.controller';
import { UserController } from './controllers/user/user.controller';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
  imports: [],
  controllers: [
    ReviewController,
    TourController,
    UserController,
    AuthController,
  ],
  providers: [AppService],
})
export class AppModule {}
