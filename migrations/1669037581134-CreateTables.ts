import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1669037581134 implements MigrationInterface {
    name = 'CreateTables1669037581134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "mission_category" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "mission" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "points" integer NOT NULL, "gameId" integer, "categoryId" integer)`);
        await queryRunner.query(`CREATE TABLE "game" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL)`);
        await queryRunner.query(`CREATE TABLE "temporary_mission" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "points" integer NOT NULL, "gameId" integer, "categoryId" integer, CONSTRAINT "FK_0cb4f6d6722b6ee0484bf9dbed2" FOREIGN KEY ("gameId") REFERENCES "game" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_687f224cb586c484ee9d5bada7b" FOREIGN KEY ("categoryId") REFERENCES "mission_category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_mission"("id", "name", "description", "points", "gameId", "categoryId") SELECT "id", "name", "description", "points", "gameId", "categoryId" FROM "mission"`);
        await queryRunner.query(`DROP TABLE "mission"`);
        await queryRunner.query(`ALTER TABLE "temporary_mission" RENAME TO "mission"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "mission" RENAME TO "temporary_mission"`);
        await queryRunner.query(`CREATE TABLE "mission" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "points" integer NOT NULL, "gameId" integer, "categoryId" integer)`);
        await queryRunner.query(`INSERT INTO "mission"("id", "name", "description", "points", "gameId", "categoryId") SELECT "id", "name", "description", "points", "gameId", "categoryId" FROM "temporary_mission"`);
        await queryRunner.query(`DROP TABLE "temporary_mission"`);
        await queryRunner.query(`DROP TABLE "game"`);
        await queryRunner.query(`DROP TABLE "mission"`);
        await queryRunner.query(`DROP TABLE "mission_category"`);
    }

}
