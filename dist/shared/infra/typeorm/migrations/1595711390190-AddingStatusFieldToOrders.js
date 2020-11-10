"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddingStatusFieldToOrders1595711390190 = void 0;

var _typeorm = require("typeorm");

class AddingStatusFieldToOrders1595711390190 {
  async up(queryRunner) {
    await queryRunner.addColumn('orders', new _typeorm.TableColumn({
      name: 'status',
      type: 'varchar',
      isNullable: true
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn('orders', 'status');
  }

}

exports.AddingStatusFieldToOrders1595711390190 = AddingStatusFieldToOrders1595711390190;