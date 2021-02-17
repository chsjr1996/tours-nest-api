import { User } from 'src/modules/user/user.model';
import * as faker from 'faker';

export class UserFactory {
  make(id?: string, email?: string, password?: string) {
    return new User(
      id || faker.random.uuid(),
      faker.date.recent(),
      faker.date.recent(),
      faker.name.firstName(),
      email || faker.internet.email(),
      'default.jpg',
      ['admin', 'user'][faker.random.number({ min: 0, max: 1 })],
      password || faker.random.alphaNumeric(16),
      null,
      null,
      null,
      true,
    );
  }
}
