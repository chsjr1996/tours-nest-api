import { Test, TestingModule } from '@nestjs/testing';
import { TourFactory } from 'src/database/factories/tour.factory';
import { TourController } from './tour.controller';
import { TourService } from './tour.service';

describe('TourController', () => {
  let controller: TourController;

  let mockTours = [new TourFactory().make('1'), new TourFactory().make('2')];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TourController],
      providers: [
        {
          provide: TourService,
          useValue: {
            store: jest
              .fn()
              .mockImplementation((newTour: any) => Promise.resolve(newTour)),
            getById: jest
              .fn()
              .mockImplementation((id: string) =>
                Promise.resolve(mockTours.find((v) => v.id === id)),
              ),
            getAll: jest.fn().mockResolvedValue(mockTours),
            update: jest
              .fn()
              .mockImplementation((id: string, modifiedTour: any) => {
                if (!mockTours.find((v) => v.id === id)) {
                  return Promise.reject();
                }
                return Promise.resolve({
                  ...mockTours.find((v) => v.id === id),
                  ...modifiedTour,
                });
              }),
            softDelete: jest.fn().mockImplementation((id: string) => {
              if (!mockTours.find((v) => v.id === id)) {
                return Promise.reject();
              }
              mockTours = mockTours.filter((m) => m.id !== id);
              if (mockTours.find((v) => v.id === id)) {
                return Promise.reject();
              }
              return Promise.resolve();
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<TourController>(TourController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('store', () => {
    it('should have a controller.store function', () => {
      expect(typeof controller.store).toBe('function');
    });

    it('should get created tour', () => {
      const newTour = new TourFactory().make('3');
      expect(controller.store(newTour)).resolves.toEqual(newTour);
    });
  });

  describe('index', () => {
    it('should have a controller.index function', () => {
      expect(typeof controller.index).toBe('function');
    });

    it('should get an array of tours', () => {
      expect(controller.index()).resolves.toEqual(mockTours);
    });
  });

  describe('show', () => {
    it('should have a controller.show function', () => {
      expect(typeof controller.show).toBe('function');
    });

    it('should get undefined if specified tour not exists', () => {
      expect(controller.show('3')).resolves.toEqual(undefined);
    });

    it('should get a specific tour', () => {
      expect(controller.show('1')).resolves.toEqual(
        mockTours.find((v) => v.id === '1'),
      );
    });
  });

  describe('update', () => {
    it('should have a controller.update function', () => {
      expect(typeof controller.update).toBe('function');
    });

    it('should get error if specified tour not exists', () => {
      const modifiedTour = new TourFactory().make('3');
      expect(controller.update('4', modifiedTour)).rejects.toEqual(undefined);
    });

    it('should get modified tour with correctly updated data', () => {
      mockTours = [...mockTours, new TourFactory().make('3')];
      mockTours[2].name = 'Darth Vader';
      expect(controller.update('3', mockTours[2])).resolves.toEqual(
        mockTours[2],
      );
    });
  });

  describe('delete', () => {
    it('should have a controller.delete function', () => {
      expect(typeof controller.delete).toBe('function');
    });

    it('should get error if specified tour not exists', () => {
      expect(controller.delete('4')).rejects.toEqual(undefined);
    });

    it('should get success on delete tour', () => {
      expect(controller.delete('2')).resolves.toEqual(undefined);
    });
  });
});
