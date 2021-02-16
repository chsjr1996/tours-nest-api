import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateToursTable1613435640097 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tours',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'start_date',
            type: 'timestamp',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'slug',
            type: 'varchar',
          },
          {
            name: 'duration',
            type: 'int',
          },
          {
            name: 'max_group_size',
            type: 'int',
          },
          {
            name: 'difficulty',
            type: 'varchar',
          },
          {
            name: 'ratings_average',
            type: 'float',
            default: 4.5,
          },
          {
            name: 'ratings_quantity',
            type: 'int',
            default: 0,
          },
          {
            name: 'price',
            type: 'float',
          },
          {
            name: 'summary',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'secret_tour',
            type: 'boolean',
            default: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'is_active',
            type: 'boolean',
            default: true,
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'tours',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedTableName: 'tours',
        referencedColumnNames: ['id'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('tours');
    const userIdFk = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('user_id') !== -1,
    );
    await queryRunner.dropForeignKey('reviews', userIdFk);
    await queryRunner.dropTable('tours');
  }
}
