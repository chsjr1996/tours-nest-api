import { Test, TestingModule } from '@nestjs/testing';
import { ReviewFactory } from 'src/database/factories/review.factory';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

describe('ReviewController', () => {
  let controller: ReviewController;

  let mockReviews = [
    new ReviewFactory().make('1'),
    new ReviewFactory().make('2'),
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewController],
      providers: [
        {
          provide: ReviewService,
          useValue: {
            store: jest
              .fn()
              .mockImplementation((newReview: any) =>
                Promise.resolve(newReview),
              ),
            getById: jest
              .fn()
              .mockImplementation((id: string) =>
                Promise.resolve(mockReviews.find((v) => v.id === id)),
              ),
            getAll: jest.fn().mockResolvedValue(mockReviews),
            update: jest
              .fn()
              .mockImplementation((id: string, modifiedReview: any) => {
                if (!mockReviews.find((v) => v.id === id)) {
                  return Promise.reject();
                }
                return Promise.resolve({
                  ...mockReviews.find((v) => v.id === id),
                  ...modifiedReview,
                });
              }),
            softDelete: jest.fn().mockImplementation((id: string) => {
              if (!mockReviews.find((v) => v.id === id)) {
                return Promise.reject();
              }
              mockReviews = mockReviews.filter((m) => m.id !== id);
              if (mockReviews.find((v) => v.id === id)) {
                return Promise.reject();
              }
              return Promise.resolve();
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<ReviewController>(ReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('store', () => {
    it('should have a controller.store function', () => {
      expect(typeof controller.store).toBe('function');
    });

    it('should get created review', () => {
      const newReview = new ReviewFactory().make('3');
      expect(controller.store(newReview)).resolves.toEqual(newReview);
    });
  });

  describe('index', () => {
    it('should have a controller.index function', () => {
      expect(typeof controller.index).toBe('function');
    });

    it('should get an array of reviews', () => {
      expect(controller.index()).resolves.toEqual(mockReviews);
    });
  });

  describe('show', () => {
    it('should have a controller.show function', () => {
      expect(typeof controller.show).toBe('function');
    });

    it('should get undefined if specified review not exists', () => {
      expect(controller.show('3')).resolves.toEqual(undefined);
    });

    it('should get a specific review', () => {
      expect(controller.show('1')).resolves.toEqual(
        mockReviews.find((v) => v.id === '1'),
      );
    });
  });

  describe('update', () => {
    it('should have a controller.update function', () => {
      expect(typeof controller.update).toBe('function');
    });

    it('should get error if specified review not exists', () => {
      const modifiedReview = new ReviewFactory().make('3');
      expect(controller.update('4', modifiedReview)).rejects.toEqual(undefined);
    });

    it('should get modified review with correctly updated data', () => {
      mockReviews = [...mockReviews, new ReviewFactory().make('3')];
      mockReviews[2].review = 'Very cool!';
      expect(controller.update('3', mockReviews[2])).resolves.toEqual(
        mockReviews[2],
      );
    });
  });

  describe('delete', () => {
    it('should have a controller.delete function', () => {
      expect(typeof controller.delete).toBe('function');
    });

    it('should get error if specified review not exists', () => {
      expect(controller.delete('4')).rejects.toEqual(undefined);
    });

    it('should get success on delete review', () => {
      expect(controller.delete('2')).resolves.toEqual(undefined);
    });
  });
});
