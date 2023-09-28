import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1695877789922 implements MigrationInterface {
    name = 'InitialMigration1695877789922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Announcements" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "Announcements" ADD "year" character varying(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Announcements" DROP COLUMN "color"`);
        await queryRunner.query(`ALTER TABLE "Announcements" ADD "color" character varying(35) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Announcements" DROP COLUMN "color"`);
        await queryRunner.query(`ALTER TABLE "Announcements" ADD "color" character varying(10) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "Announcements" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "Announcements" ADD "year" integer NOT NULL`);
    }

}
