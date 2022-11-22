import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MissionCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
