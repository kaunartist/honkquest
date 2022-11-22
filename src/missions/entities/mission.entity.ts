import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MissionCategory } from './category.entity';
import { Game } from '../../games/entities/game.entity';

@Entity()
export class Mission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  points: number;

  @ManyToOne(() => Game, (game) => game.missions)
  game: Game;

  @ManyToOne(() => MissionCategory)
  category: MissionCategory;
}
