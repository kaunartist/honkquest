import { Game } from "src/games/entities/game.entity";
import { MissionCategory } from "src/missions/entities/category.entity";
import { Mission } from "src/missions/entities/mission.entity";
import { DataSource } from "typeorm";

export default new DataSource({
    type: 'better-sqlite3',
    database: 'honk.sql',
    entities: [Game, Mission, MissionCategory],
    migrations: ['./migrations/*.ts'],
    synchronize: true
});
