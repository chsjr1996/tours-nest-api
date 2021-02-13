import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReviewService } from 'src/services/review/review.service';

@ApiTags('review')
@Controller('v1/review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Post()
  public async store() {
    throw new Error('Not implemented yet');
  }

  @Get()
  public async index() {
    return this.reviewService.getAll();
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
