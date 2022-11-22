import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from './entities/game.entity';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
  ) {}

  create(createGameDto: CreateGameDto): Promise<Game> {
    const game = new Game();
    game.name = createGameDto.name;
    game.description = createGameDto.description;

    return this.gamesRepository.save(game);
  }

  findAll(): Promise<Game[]> {
    return this.gamesRepository.find();
  }

  findOne(id: number): Promise<Game> {
    return this.gamesRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.gamesRepository.delete(id);
  }
}
