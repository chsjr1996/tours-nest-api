import { Tour } from 'src/modules/tour/tour.model';
import * as faker from 'faker';

export class TourFactory {
  make(id?: string) {
    return new Tour(
      id || faker.random.uuid(),
      faker.date.recent(),
      faker.date.recent(),
      faker.random.uuid(),
      faker.date.recent(),
      faker.random.words(3),
      faker.random.words(3),
      faker.random.number(5),
      faker.random.number(4),
      faker.random.word(),
      faker.random.number(5),
      faker.random.number(5),
      faker.random.number(200),
      faker.lorem.sentences(10),
      faker.lorem.sentences(10),
      false,
      faker.date.recent(),
      false,
    );
  }
}
