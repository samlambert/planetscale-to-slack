import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCommentPostIdIndex1703692800000 implements MigrationInterface {
    name = 'AddCommentPostIdIndex1703692800000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`comments\` ADD INDEX \`idx_comments_on_post_id\` (\`post_id\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`comments\` DROP INDEX \`idx_comments_on_post_id\``);
    }
}