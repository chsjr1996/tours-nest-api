import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tour } from './tour.model';

@Injectable()
export class TourService {
  constructor(
    @InjectRepository(Tour)
    private tourRepository: Repository<Tour>,
  ) {}

  async store(newTour: any): Promise<Tour> {
    return this.tourRepository.save(newTour);
  }

  async getById(id: string): Promise<Tour> {
    return this.tourRepository.findOneOrFail({ id });
  }

  async getAll(): Promise<Tour[]> {
    return this.tourRepository.find();
  }

  async update(id: string, modifiedTour): Promise<Tour> {
    const tour = await this.tourRepository.findOneOrFail({ id });
    return this.tourRepository.save({ ...tour, ...modifiedTour });
  }

  async softDelete(id: string): Promise<void> {
    await this.tourRepository.softDelete({ id });
    return Promise.resolve();
  }
}
