import { User } from 'src/models/user.model';
import * as faker from 'faker';

export class UserFactory {
  make(id?: number) {
    return new User(
      id || faker.random.number(5),
      faker.date.recent(),
      faker.date.recent(),
      faker.name.firstName(),
      faker.internet.email(),
      'default.jpg',
      ['Admin', 'User'][faker.random.number({ min: 0, max: 1 })],
      faker.random.alphaNumeric(16),
      null,
      null,
      null,
      true,
    );
  }
}
