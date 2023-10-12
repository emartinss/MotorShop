import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1696958733056 implements MigrationInterface {
    name = 'InitialMigration1696958733056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Comments" ("id" SERIAL NOT NULL, "comment" text NOT NULL, "userId" integer, "announcementsId" integer, CONSTRAINT "PK_91e576c94d7d4f888c471fb43de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "cep" character varying(9) NOT NULL, "state" character varying(2) NOT NULL, "city" character varying(28) NOT NULL, "street" character varying(45) NOT NULL, "number" integer NOT NULL, "complement" character varying(50), "userId" integer, CONSTRAINT "REL_95c93a584de49f0b0e13f75363" UNIQUE ("userId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "email" character varying(45) NOT NULL, "password" character varying(90) NOT NULL, "cpf" character varying(11) NOT NULL, "phone" character varying(11) NOT NULL, "date_of_birth" character varying(10) NOT NULL, "description" text NOT NULL, "is_advertiser" boolean NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "image_url" character varying(512) NOT NULL, "announcementId" integer, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Announcements" ("id" SERIAL NOT NULL, "brand" character varying(45) NOT NULL, "model" character varying(45) NOT NULL, "year" character varying(4) NOT NULL, "fuel" character varying(20) NOT NULL, "mileage" integer NOT NULL, "color" character varying(35) NOT NULL, "fipe" integer NOT NULL, "price" integer NOT NULL, "description" text NOT NULL, "userId" integer, CONSTRAINT "PK_758fc79add0389104119de29de5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Comments" ADD CONSTRAINT "FK_aa80cd9ae4c341f0aeba2401b10" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Comments" ADD CONSTRAINT "FK_80264149f6c192cc2adc96dbf7f" FOREIGN KEY ("announcementsId") REFERENCES "Announcements"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images" ADD CONSTRAINT "FK_fac6198a89ec23116ca0352104d" FOREIGN KEY ("announcementId") REFERENCES "Announcements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Announcements" ADD CONSTRAINT "FK_5e98b8950d29543bfb5738840bf" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Announcements" DROP CONSTRAINT "FK_5e98b8950d29543bfb5738840bf"`);
        await queryRunner.query(`ALTER TABLE "images" DROP CONSTRAINT "FK_fac6198a89ec23116ca0352104d"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`ALTER TABLE "Comments" DROP CONSTRAINT "FK_80264149f6c192cc2adc96dbf7f"`);
        await queryRunner.query(`ALTER TABLE "Comments" DROP CONSTRAINT "FK_aa80cd9ae4c341f0aeba2401b10"`);
        await queryRunner.query(`DROP TABLE "Announcements"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
        await queryRunner.query(`DROP TABLE "Comments"`);
    }

}
