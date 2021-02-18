import { UnauthorizedException } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { UserFactory } from 'src/database/factories/user.factory';
import { AuthService } from '../auth.service';
import { LocalStrategy } from './local.strategy';

describe('AuthController', () => {
  let strategy: LocalStrategy;

  const testEmail = 'test@natours.com';
  const testPassword = '12345678';
  const mockUser = new UserFactory().make('1', testEmail, testPassword);

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
      await expect(strategy.validate(testEmail, testPassword)).resolves.toEqual(
        mockUser,
      );
    });

    it('should throw a UnauthorizedException when login data is incorrect', async () => {
      await expect(strategy.validate(testEmail, '123')).rejects.toThrow(
        new UnauthorizedException('Incorrect email e/or password'),
      );
    });
  });
});
