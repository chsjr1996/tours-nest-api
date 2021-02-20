import { QueryFailedError } from 'typeorm';
import QueryFailedFilter from './query-failed.exception-filter';

describe('QueryFailedFilter', () => {
  const exceptionFilter = new QueryFailedFilter();

  const mockJson = jest.fn();
  const mockStatus = jest.fn().mockImplementation(() => ({
    json: mockJson,
  }));

  const mockGetResponse = jest.fn().mockImplementation(() => ({
    status: mockStatus,
  }));

  const mockSwitchToHttp = jest.fn().mockImplementation(() => ({
    getResponse: mockGetResponse,
  }));

  const mockArgumentsHost = {
    switchToHttp: mockSwitchToHttp,
    getArgByIndex: jest.fn(),
    getArgs: jest.fn(),
    getType: jest.fn(),
    switchToRpc: jest.fn(),
    switchToWs: jest.fn(),
  };

  it('should be defined', () => {
    expect(exceptionFilter).toBeDefined();
  });

  describe('catch', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should call mockSwitchToHttp', () => {
      exceptionFilter.catch(new QueryFailedError('', [], 1), mockArgumentsHost);
      expect(mockSwitchToHttp).toBeCalled();
    });

    it('should call mockGetResponse', () => {
      exceptionFilter.catch(new QueryFailedError('', [], 1), mockArgumentsHost);
      expect(mockGetResponse).toBeCalled();
    });

    it('should call mockStatus', () => {
      exceptionFilter.catch(new QueryFailedError('', [], 1), mockArgumentsHost);
      expect(mockStatus).toBeCalled();
    });

    it('should call mockJson', () => {
      exceptionFilter.catch(new QueryFailedError('', [], 1), mockArgumentsHost);
      expect(mockJson).toBeCalledWith({ devMsg: '', userMsg: 'Unknown error' });
    });
  });
});
