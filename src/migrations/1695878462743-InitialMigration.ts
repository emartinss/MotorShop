import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1695878462743 implements MigrationInterface {
    name = 'InitialMigration1695878462743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "cep" character varying(9) NOT NULL, "state" character varying(2) NOT NULL, "city" character varying(28) NOT NULL, "street" character varying(45) NOT NULL, "number" integer NOT NULL, "complement" character varying(50) NOT NULL, CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "image_url" character varying(100) NOT NULL, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(90) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(11) NOT NULL, "date_of_birth" character varying(10) NOT NULL, "description" text NOT NULL, "is_advertiser" boolean NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Announcements" ("id" SERIAL NOT NULL, "brand" character varying(45) NOT NULL, "model" character varying(45) NOT NULL, "year" character varying(4) NOT NULL, "fuel" character varying(20) NOT NULL, "mileage" integer NOT NULL, "color" character varying(35) NOT NULL, "fipe" integer NOT NULL, "price" integer NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_758fc79add0389104119de29de5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Comments" ("id" SERIAL NOT NULL, "comment" text NOT NULL, CONSTRAINT "PK_91e576c94d7d4f888c471fb43de" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Comments"`);
        await queryRunner.query(`DROP TABLE "Announcements"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
