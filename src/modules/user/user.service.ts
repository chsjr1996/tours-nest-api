import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.model';
import { CreateUserDTO } from './dto/create.user.dto';
import { UpdateUserDTO } from './dto/update.user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async store(newUser: CreateUserDTO): Promise<User> {
    return this.userRepository.save(newUser);
  }

  async getById(id: string): Promise<User> {
    return this.userRepository.findOneOrFail({ id });
  }

  async getAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async update(id: string, modifiedUser: UpdateUserDTO): Promise<User> {
    const user = await this.userRepository.findOneOrFail({ id });
    return this.userRepository.save({ ...user, ...modifiedUser });
  }

  async softDelete(id: string): Promise<void> {
    await this.userRepository.softDelete({ id });
    return Promise.resolve();
  }
}
