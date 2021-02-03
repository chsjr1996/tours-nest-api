import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty()
  id: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  photo: string;

  @ApiProperty({
    description: 'The options are: user, guide, lead-guide and admin',
  })
  role: string;

  @ApiProperty()
  password: string;

  @ApiProperty({
    description:
      'If this field is filled and user has active JWT then this API force re-login',
  })
  password_changed_at: Date;

  @ApiProperty()
  password_reset_token: string;

  @ApiProperty({
    description:
      'If this field is filled the user cannot make login or use this API and Admin Screen should not list it',
  })
  deleted_at: Date;

  @ApiProperty({
    description:
      'Inactive users can be listed in Admin Screen, but cannot make login',
  })
  is_active: boolean;
}
