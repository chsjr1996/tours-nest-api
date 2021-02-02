import { Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('auth')
@Controller('v1/auth')
export class AuthController {
  @Post('login')
  public async login(@Res() res: Response) {
    return res.json({ message: 'Not implemented Yet' });
  }
}
