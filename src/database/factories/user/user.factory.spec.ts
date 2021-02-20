import * as faker from 'faker';
import { User } from 'src/modules/user/user.model';
import { UserFactory, UserParams } from './user.factory';

describe('UserFactory', () => {
  const factory = new UserFactory();

  const userParams: UserParams = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    name: 'Anakin Skywalker',
    email: 'vader@empire.com',
    role: 'admin',
    password: '12345678',
  };

  const mockUser = new User(
    '1',
    userParams.createdAt,
    userParams.updatedAt,
    userParams.name,
    userParams.email,
    'default.jpg',
    userParams.role,
    userParams.password,
    null,
    null,
    null,
    true,
  );

  it('should be defined', () => {
    expect(factory).toBeDefined();
  });

  describe('make', () => {
    it('should return a valid user object', () => {
      expect(factory.make(userParams)).toEqual(mockUser);
    });

    it('should call faker random uuid if id is null', () => {
      const userParamsWithoutId = { ...userParams, id: null };
      const fakerSpy = jest.spyOn(faker.random, 'uuid');
      factory.make(userParamsWithoutId);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker date recent if createdAt is null', () => {
      const userParamsWithoutCreatedAt = { ...userParams, createdAt: null };
      const fakerSpy = jest.spyOn(faker.date, 'recent');
      factory.make(userParamsWithoutCreatedAt);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker date recent if updatedAt is null', () => {
      const userParamsWithoutUpdatedAt = { ...userParams, updatedAt: null };
      const fakerSpy = jest.spyOn(faker.date, 'recent');
      factory.make(userParamsWithoutUpdatedAt);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker name firstName if name is null', () => {
      const userParamsWithoutName = { ...userParams, name: null };
      const fakerSpy = jest.spyOn(faker.name, 'firstName');
      factory.make(userParamsWithoutName);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker internet email if email is null', () => {
      const userParamsWithoutEmail = { ...userParams, email: null };
      const fakerSpy = jest.spyOn(faker.internet, 'email');
      factory.make(userParamsWithoutEmail);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker random number if role is null', () => {
      const userParamsWithoutRole = { ...userParams, role: null };
      const fakerSpy = jest.spyOn(faker.random, 'number');
      factory.make(userParamsWithoutRole);
      expect(fakerSpy).toBeCalled();
    });

    it('should call faker random alphaNumeric if password is null', () => {
      const userParamsWithoutPassword = { ...userParams, password: null };
      const fakerSpy = jest.spyOn(faker.random, 'alphaNumeric');
      factory.make(userParamsWithoutPassword);
      expect(fakerSpy).toBeCalled();
    });
  });
});
