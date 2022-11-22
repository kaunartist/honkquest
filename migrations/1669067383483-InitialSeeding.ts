import { MigrationInterface, QueryRunner } from "typeorm"

export class InitialSeeding1669067383483 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO "game" (name, description) VALUES
                ('5th Grade Math Fun!', 'Let''s have some fun by going on a hunt! Solve these math problems and earn points along the way!'),
                ('Toronto landmark hunt', 'This interactive quiz tour will take you to all the major landmarks and attractions the city has to offer!')
            `,
        );

        await queryRunner.query(
            `INSERT INTO "mission_category" (name) VALUES
                ('text'),
                ('photo+video'),
                ('gps')
            `,
        );

        await queryRunner.query(
            `INSERT INTO "mission" (name, description, points, gameId, categoryId) VALUES
                ('Barrels on Board','The Mayflower was one of the largest ships of her time. It could carry about 180 large barrels on board. If the pilgrims put the barrels in 15 rows, how many barrels would have been in each row?', 100, 1, 1),
                ('If you Sailed on the Mayflower','Use the book "...If You Sailed on the Mayflower in 1620" or "Don''t Know Much About the Pilgrims" and find one fact that your group didn''t know and finds interesting. Make a short video explaining the fun fact.', 500, 1, 2),
                ('Groovy Potatoes','What good is Groovy Gravy without mashed potatoes? It takes 23 potatoes to make a batch of Grandma''s Groovy Mashed Potatoes. If there is a shipment of 3,659 potatoes, how many batches of potatoes can be made?', 200, 1, 1),
                ('The tallest tower','This building stands above all others downtown and gives a view for miles on its observation deck. You''ll need to get within 100m of this tower to complete this mission.', 200, 2, 3),
                ('Trash Pandas','Raccoons are some of the city''s feistiest residents! Snap a picture of an elusive trash panda to secure these points.', 1000, 2, 2)
            `,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.clearTable('game');
        await queryRunner.clearTable('mission');
        await queryRunner.clearTable('mission_category');
    }

}
