import * as faker from 'faker';
import { Review } from 'src/modules/review/review.model';
import { ReviewFactory, ReviewParams } from './review.factory';

describe('ReviewFactory', () => {
  const factory = new ReviewFactory();

  const reviewParams: ReviewParams = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    userId: '1',
    tourId: '1',
    review: 'Awesome Tour',
  };

  const mockReview = new Review(
    reviewParams.id,
    reviewParams.createdAt,
    reviewParams.updatedAt,
    reviewParams.userId,
    reviewParams.tourId,
    reviewParams.review,
    null,
    true,
  );

  it('should be defined', () => {
    expect(factory).toBeDefined();
  });

  describe('make', () => {
    it('should return a valid review object', () => {
      expect(factory.make(reviewParams)).toEqual(mockReview);
    });

    it('should call faker random uuid if id is null', () => {
      const reviewParamsWithoutId = { ...reviewParams, id: null };
      const fakerSpy = jest.spyOn(faker.random, 'uuid');
      factory.make(reviewParamsWithoutId);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker date recent if createdAt is null', () => {
      const reviewParamsWithoutCreatedAt = { ...reviewParams, createdAt: null };
      const fakerSpy = jest.spyOn(faker.date, 'recent');
      factory.make(reviewParamsWithoutCreatedAt);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker date recent if updatedAt is null', () => {
      const reviewParamsWithoutUpdatedAt = { ...reviewParams, updatedAt: null };
      const fakerSpy = jest.spyOn(faker.date, 'recent');
      factory.make(reviewParamsWithoutUpdatedAt);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker random uuid if userId is null', () => {
      const reviewParamsWithoutUserId = { ...reviewParams, userId: null };
      const fakerSpy = jest.spyOn(faker.random, 'uuid');
      factory.make(reviewParamsWithoutUserId);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker random uuid if tourId is null', () => {
      const reviewParamsWithoutTourId = { ...reviewParams, tourId: null };
      const fakerSpy = jest.spyOn(faker.random, 'uuid');
      factory.make(reviewParamsWithoutTourId);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker lorem sentences if review is null', () => {
      const reviewParamsWithoutReview = { ...reviewParams, review: null };
      const fakerSpy = jest.spyOn(faker.lorem, 'sentences');
      factory.make(reviewParamsWithoutReview);
      expect(fakerSpy).toBeCalled();
    });
  });
});
