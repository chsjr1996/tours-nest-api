import { UnauthorizedException } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import {
  UserFactory,
  UserParams,
} from 'src/database/factories/user/user.factory';
import { AuthService } from '../auth.service';
import { LocalStrategy } from './local.strategy';

describe('LocalStrategy', () => {
  let strategy: LocalStrategy;

  const userParams: UserParams = {
    id: '1',
    email: 'test@natours.com',
    password: '12345678',
  };
  const mockUser = new UserFactory().make(userParams);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [
        LocalStrategy,
        {
          provide: AuthService,
          useValue: {
            validateUser: jest
              .fn()
              .mockImplementation((email: string, password: string) => {
                if (
                  (email === mockUser.email, password === mockUser.password)
                ) {
                  return Promise.resolve(mockUser);
                }
                return Promise.resolve(null);
              }),
          },
        },
      ],
    }).compile();

    strategy = module.get<LocalStrategy>(LocalStrategy);
  });

  it('should be defined', () => {
    expect(strategy).toBeDefined();
  });

  describe('validate', () => {
    it('should return a validated user', async () => {
      await expect(
        strategy.validate(userParams.email, userParams.password),
      ).resolves.toEqual(mockUser);
    });

    it('should throw a UnauthorizedException when login data is incorrect', async () => {
      await expect(strategy.validate(userParams.email, '123')).rejects.toThrow(
        new UnauthorizedException('Incorrect email e/or password'),
      );
    });
  });
});
