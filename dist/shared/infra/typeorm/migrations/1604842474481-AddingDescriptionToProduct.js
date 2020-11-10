"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class AddingDescriptionToProduct1604842474481 {
  async up(queryRunner) {
    await queryRunner.addColumn('products', new _typeorm.TableColumn({
      name: 'description',
      type: 'varchar',
      isNullable: true
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn('products', 'description');
  }

}

exports.default = AddingDescriptionToProduct1604842474481;