import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule, JwtService } from '@nestjs/jwt';
import {
  UserFactory,
  UserParams,
} from 'src/database/factories/user/user.factory';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../user/user.service';

describe('UserService', () => {
  let service: AuthService;
  let jwtService: JwtService;

  const userParams: UserParams = {
    id: '1',
    email: 'test@tours.com',
    password: '12345678',
  };
  const mockUser = new UserFactory().make(userParams);

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
          secretOrPrivateKey: 'awesomeSecret',
          signOptions: {
            expiresIn: 3600,
          },
        }),
      ],
      providers: [
        AuthService,
        {
          provide: UserService,
          useValue: {
            getAll: jest
              .fn()
              .mockImplementation(() => Promise.resolve([mockUser])),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('validateUser', () => {
    it('should return a user if auth data is correct', async () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...mockUserWithoutPassword } = mockUser;
      await expect(
        service.validateUser(userParams.email, userParams.password),
      ).resolves.toEqual(mockUserWithoutPassword);
    });

    it('should return null if auth data is incorrect', async () => {
      await expect(
        service.validateUser(userParams.email, '12345679'),
      ).resolves.toBeNull();
    });
  });

  describe('generateToken', () => {
    it('should return a token', async () => {
      const payload = { sub: mockUser.id };
      const jwtServiceSpy = jest.spyOn(jwtService, 'sign');
      const jwtFake = jwtService.sign(payload);
      await expect(service.generateToken(mockUser)).resolves.toEqual({
        access_token: jwtFake,
      });
      expect(jwtServiceSpy).toBeCalledWith(payload);
    });
  });
});
