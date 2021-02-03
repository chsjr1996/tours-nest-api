import { Response } from 'express';
import { Controller, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('v1/auth')
export class AuthController {
  @Post('login')
  public async login(@Res() res: Response) {
    return res.json({ message: 'Not implemented Yet' });
  }
}
