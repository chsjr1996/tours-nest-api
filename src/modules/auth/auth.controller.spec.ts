import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('login', () => {
    // TODO: Temporarily... the auth flow is not defined yet
    it('should reject this promise', () => {
      expect(controller.login()).rejects.toEqual({
        message: 'Not implemented yet',
      });
    });
  });
});
