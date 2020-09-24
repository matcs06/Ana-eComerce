import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

// eslint-disable-next-line import/prefer-default-export
export class AddCustomerPhoneNumberToOrder1600531667077
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'orders',
      new TableColumn({
        name: 'phone',
        type: 'varchar',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('orders', 'phone');
  }
}
