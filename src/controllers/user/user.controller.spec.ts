import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from 'src/services/user/user.service';
import { UserFactory } from 'src/factories/user.factory';

describe('UserController', () => {
  let controller: UserController;
  // let service: UserService;

  const mockUsers = [new UserFactory().make(), new UserFactory().make()];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            getById: jest
              .fn()
              .mockImplementation((id: string) =>
                Promise.resolve(mockUsers.find((v) => v.id === parseInt(id))),
              ),
            getAll: jest.fn().mockResolvedValue(mockUsers),
          },
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    // service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('index', () => {
    it('should get an array of users', async () => {
      await expect(controller.index()).resolves.toEqual(mockUsers);
    });
  });

  describe('show', () => {
    it('should get a specific user', async () => {
      await expect(controller.show('1')).resolves.toEqual(
        mockUsers.find((v) => v.id === parseInt('1')),
      );
    });
  });
});
