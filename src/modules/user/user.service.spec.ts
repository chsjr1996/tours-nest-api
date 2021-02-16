import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserFactory } from 'src/database/factories/user.factory';
import { User } from './user.model';
import { Repository } from 'typeorm';
import { UserService } from './user.service';

const usersMock = [new UserFactory().make('1'), new UserFactory().make('2')];

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            findOneOrFail: jest.fn().mockReturnValue(usersMock[0]),
            find: jest.fn().mockReturnValue(usersMock),
          },
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getById', () => {
    it('should return a specific user', async () => {
      const repositorySpy = jest.spyOn(repository, 'findOneOrFail');
      expect(service.getById('1')).resolves.toEqual(usersMock[0]);
      expect(repositorySpy).toBeCalledWith({ id: '1' });
    });
  });

  describe('getAll', () => {
    it('should return an array of users', async () => {
      const users = await service.getAll();
      expect(users).toEqual(usersMock);
    });
  });
});
