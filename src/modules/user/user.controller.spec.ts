import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserFactory } from 'src/database/factories/user.factory';
import { CreateUserDTO } from './dto/create.user.dto';
import { UpdateUserDTO } from './dto/update.user.dto';

describe('UserController', () => {
  let controller: UserController;

  let mockUsers = [new UserFactory().make('1'), new UserFactory().make('2')];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            store: jest
              .fn()
              .mockImplementation((newUser: CreateUserDTO) =>
                Promise.resolve(newUser),
              ),
            getById: jest
              .fn()
              .mockImplementation((id: string) =>
                Promise.resolve(mockUsers.find((v) => v.id === id)),
              ),
            getAll: jest.fn().mockResolvedValue(mockUsers),
            update: jest
              .fn()
              .mockImplementation((id: string, modifiedUser: UpdateUserDTO) => {
                if (!mockUsers.find((v) => v.id === id)) {
                  return Promise.reject();
                }
                return Promise.resolve({
                  ...mockUsers.find((v) => v.id === id),
                  ...modifiedUser,
                });
              }),
            softDelete: jest.fn().mockImplementation((id: string) => {
              if (!mockUsers.find((v) => v.id === id)) {
                return Promise.reject();
              }
              mockUsers = mockUsers.filter((m) => m.id !== id);
              if (mockUsers.find((v) => v.id === id)) {
                return Promise.reject();
              }
              return Promise.resolve();
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('store', () => {
    it('should have a controller.store function', () => {
      expect(typeof controller.store).toBe('function');
    });

    it('should get created user', () => {
      const newUser = new UserFactory().make('3');
      expect(controller.store(newUser)).resolves.toEqual(newUser);
    });
  });

  describe('index', () => {
    it('should have a controller.index function', () => {
      expect(typeof controller.index).toBe('function');
    });

    it('should get an array of users', () => {
      expect(controller.index()).resolves.toEqual(mockUsers);
    });
  });

  describe('show', () => {
    it('should have a controller.show function', () => {
      expect(typeof controller.show).toBe('function');
    });

    it('should get undefined if specified user not exists', () => {
      expect(controller.show('3')).resolves.toEqual(undefined);
    });

    it('should get a specific user', () => {
      expect(controller.show('1')).resolves.toEqual(
        mockUsers.find((v) => v.id === '1'),
      );
    });
  });

  describe('update', () => {
    it('should have a controller.update function', () => {
      expect(typeof controller.update).toBe('function');
    });

    it('should get error if specified user not exists', () => {
      const modifiedUser = new UserFactory().make('3');
      expect(controller.update('4', modifiedUser)).rejects.toEqual(undefined);
    });

    it('should get modified user with correctly updated data', () => {
      mockUsers = [...mockUsers, new UserFactory().make('3')];
      mockUsers[2].name = 'Darth Vader';
      expect(controller.update('3', mockUsers[2])).resolves.toEqual(
        mockUsers[2],
      );
    });
  });

  describe('delete', () => {
    it('should have a controller.delete function', () => {
      expect(typeof controller.delete).toBe('function');
    });

    it('should get error if specified user not exists', () => {
      expect(controller.delete('4')).rejects.toEqual(undefined);
    });

    it('should get success on delete user', () => {
      expect(controller.delete('2')).resolves.toEqual(undefined);
    });
  });
});
