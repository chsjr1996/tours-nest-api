import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TourController } from './tour.controller';
import { Tour } from './tour.model';
import { TourService } from './tour.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tour])],
  controllers: [TourController],
  providers: [TourService],
})
export class TourModule {}
