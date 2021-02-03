import { Response } from 'express';
import { Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TourService } from 'src/services/tour/tour.service';

@ApiTags('tour')
@Controller('v1/tour')
export class TourController {
  constructor(private tourService: TourService) {}

  @Post()
  public async store(@Res() res: Response) {
    return res.json({ message: 'Not implemented yet' });
  }

  @Get()
  public async index() {
    return this.tourService.getAll();
  }

  @Get(':id')
  public async show(@Param('id') id: string, @Res() res: Response) {
    return res.json({ message: 'Not implemented yet' });
  }

  @Put(':id')
  public async update(@Param('id') id: string, @Res() res: Response) {
    return res.json({ message: 'Not implemented yet' });
  }

  @Delete(':id')
  public async delete(@Param('id') id: string, @Res() res: Response) {
    return res.json({ message: 'Not implemented yet' });
  }
}
