import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReviewFactory } from 'src/database/factories/review.factory';
import { Repository } from 'typeorm';
import { Review } from './review.model';
import { ReviewService } from './review.service';

describe('ReviewService', () => {
  let service: ReviewService;
  let repository: Repository<Review>;

  const reviewsMock = [
    new ReviewFactory().make('1'),
    new ReviewFactory().make('2'),
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        {
          provide: getRepositoryToken(Review),
          useValue: {
            save: jest
              .fn()
              .mockImplementation((review) => Promise.resolve(review)),
            findOneOrFail: jest.fn().mockReturnValue(reviewsMock[0]),
            find: jest.fn().mockReturnValue(reviewsMock),
            softDelete: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
    repository = module.get<Repository<Review>>(getRepositoryToken(Review));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('store', () => {
    it('should return a created review', async () => {
      const newReview = new ReviewFactory().make('3');
      await expect(service.store(newReview)).resolves.toEqual(newReview);
    });
  });

  describe('getById', () => {
    it('should return a specific review', async () => {
      const repositorySpy = jest.spyOn(repository, 'findOneOrFail');
      await expect(service.getById('1')).resolves.toEqual(reviewsMock[0]);
      expect(repositorySpy).toBeCalledWith({ id: '1' });
    });
  });

  describe('getAll', () => {
    it('should return an array of reviews', async () => {
      await expect(service.getAll()).resolves.toEqual(reviewsMock);
    });
  });

  describe('update', () => {
    it('should return a updated user with new data', async () => {
      const modifiedUser = new ReviewFactory().make('3');
      modifiedUser.review = 'Very Cool!';
      await expect(service.update('3', modifiedUser)).resolves.toEqual(
        modifiedUser,
      );
    });
  });

  describe('softDelete', () => {
    it('should resolve softDelete', async () => {
      await expect(service.softDelete('3')).resolves.toEqual(undefined);
    });
  });
});
