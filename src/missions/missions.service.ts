import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mission } from './entities/mission.entity';
import { MissionCategory } from './entities/category.entity';
import { Game } from '../games/entities/game.entity';
import { CreateMissionDto } from './dto/create-mission.dto';
import { CreateMissionCategoryDto } from './dto/create-category.dto';

@Injectable()
export class MissionsService {
  constructor(
    @InjectRepository(Mission)
    private missionsRepository: Repository<Mission>,
    @InjectRepository(Game)
    private gamesRepository: Repository<Game>,
    @InjectRepository(MissionCategory)
    private categoryRepository: Repository<MissionCategory>,
  ) {}

  async create(createMissionDto: CreateMissionDto) {
    const mission = new Mission();
    mission.name = createMissionDto.name;
    mission.description = createMissionDto.description;
    mission.points = createMissionDto.points;

    mission.game = await this.gamesRepository.findOneBy({
      name: createMissionDto.game,
    });
    mission.category = await this.categoryRepository.findOneBy({
      name: createMissionDto.category,
    });

    return this.missionsRepository.save(mission);
  }

  async createCategory(createMissionCategoryDto: CreateMissionCategoryDto) {
    const category = new MissionCategory();
    category.name = createMissionCategoryDto.name;
    const result = await this.categoryRepository.save(category);
    return result;
  }

  async findByGame(gameId: number): Promise<Mission[]> {
    const missions = await this.missionsRepository
      .createQueryBuilder('mission')
      .leftJoinAndSelect('mission.category', 'mission_category')
      .leftJoinAndSelect('mission.game', 'game')
      .andWhere('mission.gameId = :gameId', { gameId })
      .select([
        'mission.id AS id',
        'game.name AS game',
        'mission.name AS name',
        'mission.description AS description',
        'mission.points AS points',
        'mission_category.name AS category',
      ])
      .execute();

    return missions;
  }

  async findOne(id: number): Promise<Mission> {
    const mission = await this.missionsRepository
      .createQueryBuilder('mission')
      .leftJoinAndSelect('mission.game', 'game')
      .leftJoinAndSelect('mission.category', 'mission_category')
      .andWhere('mission.id = :id', { id })
      .select([
        'mission.id AS id',
        'game.name AS game',
        'mission.name AS name',
        'mission.description AS description',
        'mission.points AS points',
        'mission_category.name AS category',
      ])
      .getRawOne();

    return mission;
  }
}
