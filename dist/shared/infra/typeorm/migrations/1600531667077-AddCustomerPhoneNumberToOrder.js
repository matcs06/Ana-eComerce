"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddCustomerPhoneNumberToOrder1600531667077 = void 0;

var _typeorm = require("typeorm");

// eslint-disable-next-line import/prefer-default-export
class AddCustomerPhoneNumberToOrder1600531667077 {
  async up(queryRunner) {
    await queryRunner.addColumn('orders', new _typeorm.TableColumn({
      name: 'phone',
      type: 'varchar',
      isNullable: true
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn('orders', 'phone');
  }

}

exports.AddCustomerPhoneNumberToOrder1600531667077 = AddCustomerPhoneNumberToOrder1600531667077;