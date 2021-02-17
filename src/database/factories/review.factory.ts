import { Review } from 'src/modules/review/review.model';
import * as faker from 'faker';

export class ReviewFactory {
  make(id?: string) {
    return new Review(
      id || faker.random.uuid(),
      faker.date.recent(),
      faker.date.recent(),
      faker.random.uuid(),
      faker.random.uuid(),
      faker.lorem.sentences(10),
      null,
      true,
    );
  }
}
