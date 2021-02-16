import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tours' })
export class Tour {
  @PrimaryGeneratedColumn()
  id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  user_id: string;

  @Column()
  start_date: Date;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  duration: number;

  @Column()
  max_group_size: number;

  @Column()
  difficulty: string;

  @Column()
  ratings_average: number;

  @Column()
  ratings_quantity: number;

  @Column()
  price: number;

  @Column()
  summary: string;

  @Column()
  description: string;

  @Column()
  secret_tour: boolean;

  @DeleteDateColumn()
  deleted_at: Date;

  @Column()
  is_active: boolean;

  constructor(
    id: string,
    created_at: Date,
    updated_at: Date,
    user_id: string,
    start_date: Date,
    name: string,
    slug: string,
    duration: number,
    max_group_size: number,
    difficulty: string,
    ratings_average: number,
    ratings_quantity: number,
    price: number,
    summary: string,
    description: string,
    secret_tour: boolean,
    deleted_at: Date,
    is_active: boolean,
  ) {
    this.id = id;
    this.created_at = created_at || new Date();
    this.updated_at = updated_at || new Date();
    this.user_id = user_id;
    this.start_date = start_date || new Date();
    this.name = name;
    this.slug = slug;
    this.duration = duration;
    this.max_group_size = max_group_size;
    this.difficulty = difficulty;
    this.ratings_average = ratings_average;
    this.ratings_quantity = ratings_quantity;
    this.price = price;
    this.summary = summary;
    this.description = description;
    this.secret_tour = secret_tour;
    this.deleted_at = deleted_at;
    this.is_active = is_active;
  }
}
