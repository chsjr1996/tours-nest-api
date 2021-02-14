import { Test, TestingModule } from '@nestjs/testing';
import { TourController } from './tour.controller';
import { TourService } from './tour.service';

describe('TourController', () => {
  let controller: TourController;

  const mockTours = [];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TourController],
      providers: [TourService],
    }).compile();

    controller = module.get<TourController>(TourController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('index', () => {
    it('should get an array of tours', async () => {
      await expect(controller.index()).resolves.toEqual(mockTours);
    });
  });

  describe('show', () => {
    it('should get a specific tour', async () => {
      await expect(controller.show('1')).resolves.toEqual(
        mockTours.find((v) => v.id === parseInt('1')),
      );
    });
  });
});
