import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TourFactory } from 'src/database/factories/tour.factory';
import { Repository } from 'typeorm';
import { Tour } from './tour.model';
import { TourService } from './tour.service';

const toursMock = [new TourFactory().make('1'), new TourFactory().make('2')];

describe('TourService', () => {
  let service: TourService;
  let repository: Repository<Tour>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TourService,
        {
          provide: getRepositoryToken(Tour),
          useValue: {
            findOneOrFail: jest.fn().mockReturnValue(toursMock[0]),
            find: jest.fn().mockReturnValue(toursMock),
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

  describe('getById', () => {
    it('should return a specific tour', async () => {
      const repositorySpy = jest.spyOn(repository, 'findOneOrFail');
      expect(service.getById('1')).resolves.toEqual(toursMock[0]);
      expect(repositorySpy).toBeCalledWith({ id: '1' });
    });
  });

  describe('getAll', () => {
    it('should return an array of tours', async () => {
      const tours = await service.getAll();
      expect(tours).toEqual(toursMock);
    });
  });
});
