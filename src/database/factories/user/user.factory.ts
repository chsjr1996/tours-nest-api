import { User } from 'src/modules/user/user.model';
import * as faker from 'faker';

export interface UserParams {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  name?: string;
  email?: string;
  role?: 'user' | 'guide' | 'lead-guide' | 'admin';
  password?: string;
}

export class UserFactory {
  make(params?: UserParams) {
    return new User(
      params.id || faker.random.uuid(),
      params.createdAt || faker.date.recent(),
      params.updatedAt || faker.date.recent(),
      params.name || faker.name.firstName(),
      params.email || faker.internet.email(),
      'default.jpg',
      params.role || ['admin', 'user'][faker.random.number({ min: 0, max: 1 })],
      params.password || faker.random.alphaNumeric(16),
      null,
      null,
      null,
      true,
    );
  }
}
