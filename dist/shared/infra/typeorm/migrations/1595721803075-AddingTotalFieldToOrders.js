"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class AddingTotalFieldToOrders1595721803075 {
  async up(queryRunner) {
    await queryRunner.addColumn('orders', new _typeorm.TableColumn({
      name: 'total',
      type: 'decimal',
      isNullable: true
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn('orders', 'total');
  }

}

exports.default = AddingTotalFieldToOrders1595721803075;