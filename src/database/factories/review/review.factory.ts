import { Review } from 'src/modules/review/review.model';
import * as faker from 'faker';

export interface ReviewParams {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
  tourId?: string;
  review?: string;
}

export class ReviewFactory {
  make(params?: ReviewParams) {
    return new Review(
      params.id || faker.random.uuid(),
      params.createdAt || faker.date.recent(),
      params.updatedAt || faker.date.recent(),
      params.userId || faker.random.uuid(),
      params.tourId || faker.random.uuid(),
      params.review || faker.lorem.sentences(10),
      null,
      true,
    );
  }
}
