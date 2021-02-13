import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/services/user/user.service';
import { UserResponse } from 'src/doc/responses/user.response';
import { User } from 'src/models/user.model';

@ApiTags('user')
@Controller('v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public store() {
    throw new Error('Not implemented yet');
  }

  @Get()
  @ApiOkResponse({ type: UserResponse, isArray: true })
  public async index(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserResponse })
  public async show(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @Put(':id')
  public update(@Param('id') id: string) {
    throw new Error('Not implemented yet');
  }

  @Delete(':id')
  @HttpCode(204)
  public delete(@Param('id') id: string) {
    throw new Error('Not implemented yet');
  }
}
