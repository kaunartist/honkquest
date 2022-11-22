import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { GamesModule } from '../../src/games/games.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from '../../src/games/entities/game.entity';
import { Mission } from '../../src/missions/entities/mission.entity';
import { MissionCategory } from '../../src/missions/entities/category.entity';
import { CreateGameDto } from 'src/games/dto/create-game.dto';

describe('Games - /games', () => {
  let app: INestApplication;
  const game = {
    name: 'Defense Against the Duck Arts',
    description: 'Prepare yourself to survive against crafts most fowl.',
  };
  const expectedGame = expect.objectContaining({
    ...game,
  });

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        GamesModule,
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: ':memory:',
          dropSchema: true,
          entities: [Game, Mission, MissionCategory],
          autoLoadEntities: true,
          synchronize: true,
        }),
        TypeOrmModule.forFeature([Game]),
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create [POST /]', () => {
    return request(app.getHttpServer())
      .post('/games')
      .send(game as CreateGameDto)
      .expect(HttpStatus.CREATED)
      .then(({ body }) => {
        expect(body).toEqual(expectedGame);
      });
  });

  it('Get all [GET /]', () => {
    return request(app.getHttpServer())
      .get('/games')
      .then(({ body }) => {
        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toEqual(expectedGame);
      });
  });

  it('Get one [GET /:id]', () => {
    return request(app.getHttpServer())
      .get('/games/1')
      .then(({ body }) => {
        expect(body).toEqual(expectedGame);
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
