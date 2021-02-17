import { ApiProperty } from '@nestjs/swagger';
export class UserDTO {
  @ApiProperty({
    required: false,
    description:
      'The user ID. If you will create a new user then you need set id to "0" or omit this property because in database it\'s auto incremented',
  })
  id: string;

  @ApiProperty({ required: false })
  created_at: Date;

  @ApiProperty({ required: false })
  updated_at: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false })
  photo: string;

  @ApiProperty({
    required: false,
    description: 'The options are: user, guide, lead-guide and admin',
  })
  role: string;

  @ApiProperty()
  password: string;

  @ApiProperty({
    required: false,
    description:
      'If this field is filled and user has active JWT then this API force re-login',
  })
  password_changed_at: Date;

  @ApiProperty({ required: false })
  password_reset_token: string;

  @ApiProperty({
    required: false,
    description:
      'If this field is filled the user cannot make login or use this API and Admin Screen should not list it',
  })
  deleted_at: Date;

  @ApiProperty({
    required: false,
    description:
      'Inactive users can be listed in Admin Screen, but cannot make login',
  })
  is_active: boolean;
}
