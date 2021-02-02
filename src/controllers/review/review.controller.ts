import { Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('review')
@Controller('v1/review')
export class ReviewController {
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
