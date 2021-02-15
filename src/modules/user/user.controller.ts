import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { User } from './user.model';
import { CreateUserDTO } from './dto/create.user.dto';
import { UpdateUserDTO } from './dto/update.user.dto';

@ApiTags('user')
@Controller('v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @ApiCreatedResponse({ type: UserDTO })
  public async store(@Body() body: CreateUserDTO) {
    return this.userService.store(body);
  }

  @Get()
  @ApiOkResponse({ type: UserDTO, isArray: true })
  public async index(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserDTO })
  public async show(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() body: UpdateUserDTO,
  ): Promise<User> {
    return this.userService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public delete(@Param('id') id: string): Promise<void> {
    return this.userService.softDelete(id);
  }
}
