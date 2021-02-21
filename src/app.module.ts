import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import Modules, { DatabaseModule } from './modules';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';

@Module({
  imports: [DatabaseModule, ...Modules],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
