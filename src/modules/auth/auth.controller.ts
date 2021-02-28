import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { Request } from 'express';
import { Public } from 'src/common/decorators/public/public.decorator';
import { UserDTO } from '../user/dto/user.dto';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('auth')
@Controller('v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: LoginDTO })
  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  public async login(@Req() req: Request) {
    return this.authService.generateToken(
      req.user as Omit<UserDTO, 'password'>,
    );
  }
}
