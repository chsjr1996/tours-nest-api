import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateGuidesToursTable1613435640099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'guides_tours',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'tour_id',
            type: 'uuid',
          },
        ],
      }),
    );

    await queryRunner.createForeignKeys('guides_tours', [
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedTableName: 'users',
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
    const table = await queryRunner.getTable('guides_tours');
    const userIdFk = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('user_id') !== -1,
    );
    const tourIdFk = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('tour_id') !== -1,
    );
    await queryRunner.dropForeignKeys('reviews', [userIdFk, tourIdFk]);
    await queryRunner.dropTable('guides_tours');
  }
}
