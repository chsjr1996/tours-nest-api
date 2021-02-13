import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './review/review.module';
import { TourModule } from './tour/tour.module';
import { UserModule } from './user/user.module';

export { DatabaseModule } from './database.module';
export default [AuthModule, ReviewModule, TourModule, UserModule];
