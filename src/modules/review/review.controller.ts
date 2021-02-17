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
import { Review } from './review.model';
import { ReviewService } from './review.service';

@ApiTags('review')
@Controller('v1/review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Post()
  public async store(@Body() body: any): Promise<Review> {
    return this.reviewService.store(body);
  }

  @Get()
  public async index(): Promise<Review[]> {
    return this.reviewService.getAll();
  }

  @Get(':id')
  public async show(@Param('id') id: string): Promise<Review> {
    return this.reviewService.getById(id);
  }

  @Put(':id')
  public async update(
    @Param('id') id: string,
    @Body() body: any,
  ): Promise<Review> {
    return this.reviewService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(204)
  public async delete(@Param('id') id: string) {
    return this.reviewService.softDelete(id);
  }
}
