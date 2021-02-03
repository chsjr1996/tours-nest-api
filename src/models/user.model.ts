import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  photo: string;

  @Column()
  role: string;

  @Column()
  password: string;

  @Column()
  password_changed_at: Date;

  @Column()
  password_reset_token: string;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column()
  is_active: boolean;
}
