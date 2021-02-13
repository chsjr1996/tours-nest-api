import { Module } from '@nestjs/common';
import Modules, { DatabaseModule } from './modules';

@Module({
  imports: [DatabaseModule, ...Modules],
})
export class AppModule {}
