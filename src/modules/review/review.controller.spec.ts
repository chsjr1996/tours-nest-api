import { Test, TestingModule } from '@nestjs/testing';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

describe('ReviewController', () => {
  let controller: ReviewController;

  const mockReviews = [];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewController],
      providers: [ReviewService],
    }).compile();

    controller = module.get<ReviewController>(ReviewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('index', () => {
    it('should get an array of reviews', async () => {
      await expect(controller.index()).resolves.toEqual(mockReviews);
    });
  });

  describe('show', () => {
    it('should get a specific review', async () => {
      await expect(controller.show('1')).resolves.toEqual(
        mockReviews.find((v) => v.id === parseInt('1')),
      );
    });
  });
});
