import { Tour } from 'src/modules/tour/tour.model';
import * as faker from 'faker';

export interface TourParams {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
  startDate?: Date;
  name?: string;
  slug?: string;
  duration?: number;
  maxGroupSize?: number;
  difficulty?: string;
  ratingsAverage?: number;
  ratingsQuantity?: number;
  price?: number;
  summary?: string;
  description?: string;
}

export class TourFactory {
  make(params?: TourParams) {
    return new Tour(
      params.id || faker.random.uuid(),
      params.createdAt || faker.date.recent(),
      params.updatedAt || faker.date.recent(),
      params.userId || faker.random.uuid(),
      params.startDate || faker.date.recent(),
      params.name || faker.random.words(3),
      params.slug || faker.random.words(3),
      params.duration || faker.random.number(5),
      params.maxGroupSize || faker.random.number(4),
      params.difficulty || faker.random.word(),
      params.ratingsAverage || faker.random.number(5),
      params.ratingsQuantity || faker.random.number(5),
      params.price || faker.random.number(200),
      params.summary || faker.lorem.sentences(10),
      params.description || faker.lorem.sentences(10),
      false,
      null,
      false,
    );
  }
}
