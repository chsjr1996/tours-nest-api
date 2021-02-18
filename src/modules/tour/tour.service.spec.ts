import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TourFactory } from 'src/database/factories/tour.factory';
import { Repository } from 'typeorm';
import { Tour } from './tour.model';
import { TourService } from './tour.service';

describe('TourService', () => {
  let service: TourService;
  let repository: Repository<Tour>;

  const toursMock = [new TourFactory().make('1'), new TourFactory().make('2')];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TourService,
        {
          provide: getRepositoryToken(Tour),
          useValue: {
            save: jest.fn().mockImplementation((tour) => Promise.resolve(tour)),
            findOneOrFail: jest.fn().mockReturnValue(toursMock[0]),
            find: jest.fn().mockReturnValue(toursMock),
            softDelete: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    service = module.get<TourService>(TourService);
    repository = module.get<Repository<Tour>>(getRepositoryToken(Tour));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('store', () => {
    it('should return a created tour', async () => {
      const newTour = new TourFactory().make('3');
      await expect(service.store(newTour)).resolves.toEqual(newTour);
    });
  });

  describe('getById', () => {
    it('should return a specific tour', async () => {
      const repositorySpy = jest.spyOn(repository, 'findOneOrFail');
      await expect(service.getById('1')).resolves.toEqual(toursMock[0]);
      expect(repositorySpy).toBeCalledWith({ id: '1' });
    });
  });

  describe('getAll', () => {
    it('should return an array of tours', async () => {
      await expect(service.getAll()).resolves.toEqual(toursMock);
    });
  });

  describe('update', () => {
    it('should return a updated user with new data', async () => {
      const modifiedTour = new TourFactory().make('3');
      modifiedTour.name = 'Death star!';
      await expect(service.update('3', modifiedTour)).resolves.toEqual(
        modifiedTour,
      );
    });
  });

  describe('softDelete', () => {
    it('should resolve softDelete', async () => {
      await expect(service.softDelete('3')).resolves.toEqual(undefined);
    });
  });
});
