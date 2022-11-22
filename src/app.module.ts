import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { MissionsModule } from './missions/missions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './games/entities/game.entity';
import { Mission } from './missions/entities/mission.entity';
import { MissionCategory } from './missions/entities/category.entity';

@Module({
  imports: [
    GamesModule,
    MissionsModule,
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'honk.sql',
      entities: [Game, Mission, MissionCategory],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
