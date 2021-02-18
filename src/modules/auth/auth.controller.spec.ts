import { Test, TestingModule } from '@nestjs/testing';
import { createRequest } from 'node-mocks-http';
import { UserDTO } from '../user/dto/user.dto';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;

  const req = createRequest();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            generateToken: jest
              .fn()
              .mockImplementation((user: Omit<UserDTO, 'password'>) => {
                // This is a very abstract JWT representation... just ignore it rsrs :)
                return {
                  access_token: Buffer.from(user.id.toString()).toString(
                    'base64',
                  ),
                };
              }),
          },
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    it('should reject this promise', async () => {
      req.user = {
        id: '1',
      };
      await expect(controller.login(req)).resolves.toEqual({
        access_token: Buffer.from('1').toString('base64'),
      });
    });
  });
});
