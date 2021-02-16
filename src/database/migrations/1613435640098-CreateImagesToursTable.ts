import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateImagesToursTable1613435640098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'images_tours',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'image_id',
            type: 'uuid',
          },
          {
            name: 'tour_id',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('images_tours', [
      new TableForeignKey({
        columnNames: ['image_id'],
        referencedTableName: 'image_gallery',
        referencedColumnNames: ['id'],
      }),
      new TableForeignKey({
        columnNames: ['tour_id'],
        referencedTableName: 'tours',
        referencedColumnNames: ['id'],
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('images_tours');
    const imageIdFk = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('image_id') !== -1,
    );
    const tourIdFk = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('tour_id') !== -1,
    );
    await queryRunner.dropForeignKeys('reviews', [imageIdFk, tourIdFk]);
    await queryRunner.dropTable('images_tours');
  }
}
