import { Reflector } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { createRequest, createResponse } from 'node-mocks-http';
import { JwtAuthGuard } from './jwt-auth.guard';

describe('JwtAuthGuard', () => {
  let guard: JwtAuthGuard;
  let isPublic = true;

  const mockSwitchToHttp = jest.fn().mockImplementation(() => ({
    getRequest: createRequest,
    getResponse: createResponse,
  }));

  const mockContext = {
    getHandler: jest.fn(),
    getClass: jest.fn(),
    switchToHttp: mockSwitchToHttp,
    getArgByIndex: jest.fn(),
    getArgs: jest.fn(),
    getType: jest.fn(),
    switchToRpc: jest.fn(),
    switchToWs: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JwtAuthGuard,
        {
          provide: Reflector,
          useValue: {
            getAllAndOverride: jest.fn().mockImplementation(() => {
              return isPublic;
            }),
          },
        },
      ],
    }).compile();

    guard = module.get<JwtAuthGuard>(JwtAuthGuard);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  describe('canActivate', () => {
    it('should canActivate to be a function', () => {
      expect(typeof guard.canActivate).toBe('function');
    });

    it('should canActivate return true with IS_PUBLIC_KEY', () => {
      expect(guard.canActivate(mockContext)).toBe(true);
    });

    it('should canActivate return false without IS_PUBLIC_KEY', () => {
      // Will throw a exception because jwt strategy is not initialized here.
      // The full Auth Flow tests is defined in auth.service and auth.controller specs
      isPublic = false;
      expect(guard.canActivate(mockContext)).rejects.toThrow();
    });
  });
});
