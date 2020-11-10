"use strict";

var _tsyringe = require("tsyringe");

require("../../modules/user/providers");

require("./providers");

var _UsersRepository = _interopRequireDefault(require("../../modules/user/infra/typeorm/repositories/UsersRepository"));

var _ProductsRepository = _interopRequireDefault(require("../../modules/products/infra/typeorm/repositories/ProductsRepository"));

var _OrdersRepository = _interopRequireDefault(require("../../modules/orders/infra/typeorm/repositories/OrdersRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('UsersRepository', _UsersRepository.default);

_tsyringe.container.registerSingleton('ProductsRepository', _ProductsRepository.default);

_tsyringe.container.registerSingleton('OrdersRepository', _OrdersRepository.default);