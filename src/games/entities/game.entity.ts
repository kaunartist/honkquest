import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Mission } from '../../missions/entities/mission.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Mission, (mission) => mission.game)
  missions: Mission[];
}
