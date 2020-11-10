"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class AddingImmageURLToProduct1595631414079 {
  async up(queryRunner) {
    await queryRunner.addColumn('products', new _typeorm.TableColumn({
      name: 'image_url',
      type: 'varchar',
      isNullable: true
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn('products', 'image_url');
  }

}

exports.default = AddingImmageURLToProduct1595631414079;