import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Role {
  User = 'user',
  Guide = 'guide',
  LeadGuide = 'lead-guide',
  Admin = 'admin',
}

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: string;

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

  constructor(
    id?: string,
    created_at?: Date,
    updated_at?: Date,
    name?: string,
    email?: string,
    photo?: string,
    role?: string,
    password?: string,
    password_changed_at?: Date,
    password_reset_token?: string,
    deleted_at?: Date,
    is_active?: boolean,
  ) {
    this.id = id;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
    this.name = name || '';
    this.email = email || '';
    this.photo = photo || '';
    this.role = role || '';
    this.password = password || '';
    this.password_changed_at = password_changed_at;
    this.password_reset_token = password_reset_token || '';
    this.deleted_at = deleted_at;
    this.is_active = is_active || true;
  }
}
