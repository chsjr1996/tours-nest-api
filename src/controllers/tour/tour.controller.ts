import { Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('v1/tour')
export class TourController {
  @Post()
  public async store(@Res() res: Response) {
    return res.json({ message: 'Not implemented yet' });
  }

  @Get()
  public async index(@Res() res: Response) {
    return res.json({ message: 'Not implemented yet' });
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
