import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('v1/auth')
export class AuthController {
  @Post('login')
  public async login() {
    return Promise.reject({ message: 'Not implemented yet' });
  }
}
