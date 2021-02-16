import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Tour } from './tour.model';
import { TourService } from './tour.service';

@ApiTags('tour')
@Controller('v1/tour')
export class TourController {
  constructor(private tourService: TourService) {}

  @Post()
  public async store(@Body() body: any): Promise<Tour> {
    return this.tourService.store(body);
  }

  @Get()
  public async index(): Promise<Tour[]> {
    return this.tourService.getAll();
  }

  @Get(':id')
  public async show(@Param('id') id: string): Promise<Tour> {
    return this.tourService.getById(id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() body: any,
  ): Promise<Tour> {
    return this.tourService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  public async delete(@Param('id') id: string): Promise<void> {
    return this.tourService.softDelete(id);
  }
}
