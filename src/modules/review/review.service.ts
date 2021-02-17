import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './review.model';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,
  ) {}

  async store(newReview: any): Promise<Review> {
    return this.reviewRepository.save(newReview);
  }

  async getById(id: string): Promise<Review> {
    return this.reviewRepository.findOneOrFail({ id });
  }

  async getAll(): Promise<Review[]> {
    return this.reviewRepository.find();
  }

  async update(id: string, modifiedReview: any): Promise<Review> {
    const review = await this.reviewRepository.findOneOrFail({ id });
    return this.reviewRepository.save({ ...review, ...modifiedReview });
  }

  async softDelete(id: string): Promise<void> {
    await this.reviewRepository.softDelete({ id });
    return Promise.resolve();
  }
}
