import { Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('v1/auth')
export class AuthController {
  @Post('login')
  public async login(@Res() res: Response) {
    return res.json({ message: 'Not implemented Yet' });
  }
}
