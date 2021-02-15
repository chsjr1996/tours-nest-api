import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, MinLength } from 'class-validator';
import { Role } from '../user.model';

export class UpdateUserDTO {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  photo: string;

  @ApiProperty({
    required: false,
    description: 'The options are: user, guide, lead-guide and admin',
  })
  @IsOptional()
  @IsEnum(Role)
  role: string;

  @ApiProperty()
  @MinLength(8)
  password: string;
}
