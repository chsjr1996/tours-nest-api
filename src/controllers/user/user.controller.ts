import { Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UserService } from 'src/services/user/user.service';

@ApiTags('user')
@Controller('v1/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public async store(@Res() res: Response) {
    return res.json({ message: 'Not implemented yet' });
  }

  @Get()
  public async index() {
    return this.userService.getAll();
  }

  @Get(':id')
  public async show(@Param('id') id: string, @Res() res: Response) {
    return res.json({ message: 'Not implemented yet' });
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Res() res: Response) {
    return res.json({ message: 'Not implemented yet' });
  }

  @Delete(':id')
  public async delete(@Param('id') id: string, @Res() res: Response) {
    return res.json({ message: 'Not implemented yet' });
  }
}
