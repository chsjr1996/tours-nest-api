import GlobalExceptionFilter from './global.exception-filter';

describe('GlobalExceptionFilter', () => {
  const exceptionFilter = new GlobalExceptionFilter();

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
      exceptionFilter.catch(new Error('Unknow error'), mockArgumentsHost);
      expect(mockSwitchToHttp).toBeCalled();
    });

    it('should call mockGetResponse', () => {
      exceptionFilter.catch(new Error('Unknow error'), mockArgumentsHost);
      expect(mockGetResponse).toBeCalled();
    });

    it('should call mockStatus', () => {
      exceptionFilter.catch(new Error('Unknow error'), mockArgumentsHost);
      expect(mockStatus).toBeCalled();
    });

    it('should call mockJson', () => {
      exceptionFilter.catch(new Error('Unknow error'), mockArgumentsHost);
      expect(mockJson).toBeCalledWith({ devMsg: '', userMsg: 'Unknown error' });
    });
  });
});
