import { createResponse } from 'node-mocks-http';
import errorResponseBuilder from './error-response.builder';

describe('Error Response Builder', () => {
  const mockResponse = createResponse();

  it('should be defined', () => {
    expect(errorResponseBuilder).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof errorResponseBuilder).toBe('function');
  });

  it('should call status with 500', () => {
    const mockResponseSpy = jest.spyOn(mockResponse, 'status');
    errorResponseBuilder(500, mockResponse, 'Some user message', {
      helpfulDevMessage: "I don't know about this error...",
    });
    expect(mockResponseSpy).toBeCalledWith(500);
  });

  it('should call status with 404', () => {
    const mockResponseSpy = jest.spyOn(mockResponse, 'status');
    errorResponseBuilder(404, mockResponse, 'Some user message', {
      helpfulDevMessage: "I don't know about this error...",
    });
    expect(mockResponseSpy).toBeCalledWith(404);
  });

  it('should call json with devMsg', () => {
    const mockResponseSpy = jest.spyOn(mockResponse, 'json');
    errorResponseBuilder(
      500,
      mockResponse,
      'Some user message',
      {
        helpfulDevMessage: "I don't know about this error...",
      },
      true,
    );
    expect(mockResponseSpy).toBeCalledWith({
      userMsg: 'Some user message',
      devMsg: { helpfulDevMessage: "I don't know about this error..." },
    });
  });

  it('should call json without devMsg', () => {
    const mockResponseSpy = jest.spyOn(mockResponse, 'json');
    errorResponseBuilder(500, mockResponse, 'Some user message', '');
    expect(mockResponseSpy).toBeCalledWith({
      userMsg: 'Some user message',
      devMsg: '',
    });
  });
});
