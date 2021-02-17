import { Test, TestingModule } from '@nestjs/testing';
import { UserFactory } from 'src/database/factories/user.factory';
import { UserDTO } from '../user/dto/user.dto';
import { AuthService } from './auth.service';

describe('UserService', () => {
  let service: AuthService;

  const testEmail = 'test@natours.com';
  const testPassword = '12345678';
  const mockUser = new UserFactory().make('1', testEmail, testPassword);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: AuthService,
          useValue: {
            validateUser: jest
              .fn()
              .mockImplementation((email: string, password: string) => {
                const user = mockUser.email === email ? mockUser : null;

                if (user && user.password === password) {
                  return Promise.resolve(mockUser);
                }

                return Promise.resolve(null);
              }),
            generateToken: jest
              .fn()
              .mockImplementation((user: Omit<UserDTO, 'password'>) => {
                // This is a very abstract JWT representation... just ignore it rsrs :)
                return Promise.resolve({
                  access_token: Buffer.from(user.id.toString()).toString(
                    'base64',
                  ),
                });
              }),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return a user if auth data is correct', () => {
      expect(service.validateUser(testEmail, testPassword)).resolves.toEqual(
        mockUser,
      );
    });

    it('should return null if auth data is incorrect', () => {
      expect(service.validateUser(testEmail, '12345679')).resolves.toBeNull();
    });
  });

  describe('generateToken', () => {
    it('should return a token', () => {
      expect(service.generateToken(mockUser)).resolves.toEqual({
        access_token: Buffer.from('1').toString('base64'),
      });
    });
  });
});
