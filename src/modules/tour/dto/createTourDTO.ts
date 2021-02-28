import { ApiProperty } from '@nestjs/swagger';

export class CreateTourDTO {
  @ApiProperty()
  user_id: string;

  @ApiProperty()
  start_date: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  duration: number;

  @ApiProperty()
  max_group_size: number;

  @ApiProperty()
  difficulty: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  secret_tour: boolean;
}
