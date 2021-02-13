import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TourService } from './tour.service';

@ApiTags('tour')
@Controller('v1/tour')
export class TourController {
  constructor(private tourService: TourService) {}

  @Post()
  public async store() {
    throw new Error('Not implemented yet');
  }

  @Get()
  public async index() {
    return this.tourService.getAll();
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    throw new Error('Not implemented yet');
  }

  @Put(':id')
  public async update(@Param('id') id: string) {
    throw new Error('Not implemented yet');
  }

  @Delete(':id')
  public async delete(@Param('id') id: string) {
    throw new Error('Not implemented yet');
  }
}
