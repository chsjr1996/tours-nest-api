import { Injectable } from '@nestjs/common';

@Injectable()
export class TourService {
  async getById(id: string): Promise<any> {
    return Promise.resolve();
  }

  async getAll(): Promise<any[]> {
    return Promise.resolve([]);
  }
}
