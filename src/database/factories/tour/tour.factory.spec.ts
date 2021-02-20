import * as faker from 'faker';
import { Tour } from 'src/modules/tour/tour.model';
import { TourFactory, TourParams } from './tour.factory';

describe('TourFactory', () => {
  const factory = new TourFactory();

  const tourParams: TourParams = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: '1',
    startDate: new Date(),
    name: 'The awesome tour',
    slug: 'the-awesome-tour',
    duration: 5,
    maxGroupSize: 4,
    difficulty: 'easy',
    ratingsAverage: 5,
    ratingsQuantity: 400,
    price: 200,
    summary: 'Is a awesome tour',
    description: 'Awesome tour is awesome tour...',
  };

  const mockTour = new Tour(
    tourParams.id,
    tourParams.createdAt,
    tourParams.updatedAt,
    tourParams.userId,
    tourParams.startDate,
    tourParams.name,
    tourParams.slug,
    tourParams.duration,
    tourParams.maxGroupSize,
    tourParams.difficulty,
    tourParams.ratingsAverage,
    tourParams.ratingsQuantity,
    tourParams.price,
    tourParams.summary,
    tourParams.description,
    false,
    null,
    false,
  );

  it('should be defined', () => {
    expect(factory).toBeDefined();
  });

  describe('make', () => {
    it('should return a valid tour object', () => {
      expect(factory.make(tourParams)).toEqual(mockTour);
    });

    it('should call faker random uuid if id is null', () => {
      const tourParamsWithoutId = { ...tourParams, id: null };
      const fakerSpy = jest.spyOn(faker.random, 'uuid');
      factory.make(tourParamsWithoutId);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker date recent if createdAt is null', () => {
      const tourParamsWithoutCreatedAt = { ...tourParams, createdAt: null };
      const fakerSpy = jest.spyOn(faker.date, 'recent');
      factory.make(tourParamsWithoutCreatedAt);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker date recent if updatedAt is null', () => {
      const tourParamsWithoutUpdatedAt = { ...tourParams, updatedAt: null };
      const fakerSpy = jest.spyOn(faker.date, 'recent');
      factory.make(tourParamsWithoutUpdatedAt);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker random uuid if userId is null', () => {
      const tourParamsWithoutUserId = { ...tourParams, userId: null };
      const fakerSpy = jest.spyOn(faker.random, 'uuid');
      factory.make(tourParamsWithoutUserId);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker date recent if startDate is null', () => {
      const tourParamsWithoutStartDate = { ...tourParams, startDate: null };
      const fakerSpy = jest.spyOn(faker.date, 'recent');
      factory.make(tourParamsWithoutStartDate);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker random words if name is null', () => {
      const tourParamsWithoutName = { ...tourParams, name: null };
      const fakerSpy = jest.spyOn(faker.random, 'words');
      factory.make(tourParamsWithoutName);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker random words if slug is null', () => {
      const tourParamsWithoutSlug = { ...tourParams, slug: null };
      const fakerSpy = jest.spyOn(faker.random, 'words');
      factory.make(tourParamsWithoutSlug);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker random number if duration is null', () => {
      const tourParamsWithoutDuration = { ...tourParams, duration: null };
      const fakerSpy = jest.spyOn(faker.random, 'number');
      factory.make(tourParamsWithoutDuration);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker random number if maxGroupSize is null', () => {
      const tourParamsWithoutMaxGroupSize = {
        ...tourParams,
        maxGroupSize: null,
      };
      const fakerSpy = jest.spyOn(faker.random, 'number');
      factory.make(tourParamsWithoutMaxGroupSize);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker random word if difficulty is null', () => {
      const tourParamsWithoutDifficulty = { ...tourParams, difficulty: null };
      const fakerSpy = jest.spyOn(faker.random, 'word');
      factory.make(tourParamsWithoutDifficulty);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker random number if ratingsAverage is null', () => {
      const tourParamsWithoutRatingsAverage = {
        ...tourParams,
        ratingsAverage: null,
      };
      const fakerSpy = jest.spyOn(faker.random, 'number');
      factory.make(tourParamsWithoutRatingsAverage);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker random number if ratingsQuantity is null', () => {
      const tourParamsWithoutRatingsQuantity = {
        ...tourParams,
        ratingsQuantity: null,
      };
      const fakerSpy = jest.spyOn(faker.random, 'number');
      factory.make(tourParamsWithoutRatingsQuantity);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker random number if price is null', () => {
      const tourParamsWithoutPrice = { ...tourParams, price: null };
      const fakerSpy = jest.spyOn(faker.random, 'number');
      factory.make(tourParamsWithoutPrice);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker lorem sentences if summary is null', () => {
      const tourParamsWithoutSummary = { ...tourParams, summary: null };
      const fakerSpy = jest.spyOn(faker.lorem, 'sentences');
      factory.make(tourParamsWithoutSummary);
      expect(fakerSpy).toBeCalled();
    });

    it('shoud call faker lorem sentences if description is null', () => {
      const tourParamsWithoutDescription = { ...tourParams, description: null };
      const fakerSpy = jest.spyOn(faker.lorem, 'sentences');
      factory.make(tourParamsWithoutDescription);
      expect(fakerSpy).toBeCalled();
    });
  });
});
