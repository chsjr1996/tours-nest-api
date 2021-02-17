import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'reviews' })
export class Review {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  user_id: string;

  @Column()
  tour_id: string;

  @Column()
  review: string;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column()
  is_active: boolean;

  constructor(
    id: string,
    created_at: Date,
    updated_at: Date,
    user_id: string,
    tour_id: string,
    review: string,
    deleted_at: Date,
    is_active: boolean,
  ) {
    this.id = id;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.user_id = user_id;
    this.tour_id = tour_id;
    this.review = review;
    this.deleted_at = deleted_at;
    this.is_active = is_active;
  }
}
