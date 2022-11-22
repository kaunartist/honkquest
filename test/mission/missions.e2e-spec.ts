import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { GamesModule } from '../../src/games/games.module';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Game } from '../../src/games/entities/game.entity';
import { Mission } from '../../src/missions/entities/mission.entity';
import { MissionCategory } from '../../src/missions/entities/category.entity';
import { CreateGameDto } from '../../src/games/dto/create-game.dto';
import { CreateMissionDto } from '../../src/missions/dto/create-mission.dto';
import { MissionsModule } from '../../src/missions/missions.module';
import { CreateMissionCategoryDto } from '../../src/missions/dto/create-category.dto';

describe('Missions - /missions', () => {
  let app: INestApplication;
  let gamesRepo: Repository<Game>;
  let categoryRepo: Repository<MissionCategory>;

  const game = {
    name: 'Defense Against the Duck Arts',
    description: 'Prepare yourself to survive against crafts most fowl.',
  };

  const categories = ['text', 'photo+video', 'gps'];

  const missions = [
    {
      game: 'Defense Against the Duck Arts',
      name: 'Do a Barrel Roll',
      description:
        'Practice diving away from a protective goose and catch it on video to get these points!',
      points: 300,
      category: 'photo+video',
    },
    {
      game: 'Defense Against the Duck Arts',
      name: 'Let Me See Your War Face',
      description:
        "Take a short video in the mirror of your best imitation of a nesting mother's hiss.",
      points: 400,
      category: 'photo+video',
    },
  ];

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        GamesModule,
        MissionsModule,
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: ':memory:',
          dropSchema: true,
          entities: [Game, Mission, MissionCategory],
          autoLoadEntities: true,
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Mission]),
      ],
      providers: [
        {
          provide: getRepositoryToken(Game),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(MissionCategory),
          useClass: Repository,
        },
      ],
    }).compile();

    gamesRepo = moduleFixture.get<Repository<Game>>(getRepositoryToken(Game));
    categoryRepo = moduleFixture.get<Repository<MissionCategory>>(
      getRepositoryToken(MissionCategory),
    );

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create mission [POST /missions]', async () => {
    await request(app.getHttpServer())
      .post('/games')
      .send(game as CreateGameDto);

    for (let i = 0; i < categories.length; i++) {
      await request(app.getHttpServer())
        .post('/missions/categories')
        .send({ name: categories[i] } as CreateMissionCategoryDto);
    }

    const testGame: Game = {
      id: 1,
      name: 'Defense Against the Duck Arts',
      description: 'Prepare yourself to survive against crafts most fowl.',
      missions: [],
    };

    const testCategory: MissionCategory = {
      id: 2,
      name: 'photo+video',
    };

    const expectedMission = expect.objectContaining({
      id: 1,
      name: missions[0].name,
      description: missions[0].description,
      points: missions[0].points,
      game: {
        id: testGame.id,
        name: testGame.name,
        description: testGame.description,
        missions: [],
      },
      category: {
        id: testCategory.id,
        name: testCategory.name,
      },
    });

    jest.spyOn(gamesRepo, 'findOneBy').mockResolvedValueOnce(testGame);
    jest.spyOn(categoryRepo, 'findOneBy').mockResolvedValueOnce(testCategory);

    return request(app.getHttpServer())
      .post('/missions')
      .send(missions[0] as CreateMissionDto)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => {
        expect(body).toEqual(expectedMission);
      });
  });

  it('Get missions [GET /missions/game/:id]', () => {
    return request(app.getHttpServer())
      .get('/missions/game/1')
      .then(({ body }) => {
        expect(body).toEqual([{ id: 1, ...missions[0] }]);
      });
  });

  it('Get one [GET /:id]', () => {
    return request(app.getHttpServer())
      .get('/missions/1')
      .then(({ body }) => {
        expect(body).toEqual({ id: 1, ...missions[0] });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
