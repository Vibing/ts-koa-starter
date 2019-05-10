import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
