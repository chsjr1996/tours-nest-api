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
            save: jest.fn().mockImplementation((user) => Promise.resolve(user)),
            findOneOrFail: jest.fn().mockReturnValue(usersMock[0]),
            find: jest.fn().mockReturnValue(usersMock),
            softDelete: jest.fn().mockResolvedValue(undefined),
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

  describe('store', () => {
    it('should return a created user', () => {
      const newUser = new UserFactory().make('3');
      expect(service.store(newUser)).resolves.toEqual(newUser);
    });
  });

  describe('getById', () => {
    it('should return a specific user', () => {
      const repositorySpy = jest.spyOn(repository, 'findOneOrFail');
      expect(service.getById('1')).resolves.toEqual(usersMock[0]);
      expect(repositorySpy).toBeCalledWith({ id: '1' });
    });
  });

  describe('getAll', () => {
    it('should return an array of users', () => {
      expect(service.getAll()).resolves.toEqual(usersMock);
    });
  });

  describe('update', () => {
    it('should return a updated user with new data', () => {
      const modifiedUser = new UserFactory().make('3');
      modifiedUser.name = 'Luke Skywalker';
      expect(service.update('3', modifiedUser)).resolves.toEqual(modifiedUser);
    });
  });

  describe('softDelete', () => {
    it('should resolve softDelete', () => {
      expect(service.softDelete('3')).resolves.toEqual(undefined);
    });
  });
});
