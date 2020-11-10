"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ensureAuthenticated = _interopRequireDefault(require("../../../../user/infra/http/middlewares/ensureAuthenticated"));

var _CreateOrdersController = _interopRequireDefault(require("../controller/CreateOrdersController"));

var _FindOneOrderController = _interopRequireDefault(require("../controller/FindOneOrderController"));

var _FindAllOpenOrdersController = _interopRequireDefault(require("../controller/FindAllOpenOrdersController"));

var _FindAllClosedOrdersController = _interopRequireDefault(require("../controller/FindAllClosedOrdersController"));

var _CloseOrderController = _interopRequireDefault(require("../controller/CloseOrderController"));

var _DeleteOrderByIdController = _interopRequireDefault(require("../controller/DeleteOrderByIdController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ordersRouter = (0, _express.Router)();
const ordersController = new _CreateOrdersController.default();
const findOneOrderController = new _FindOneOrderController.default();
const findAllOpenOrdersController = new _FindAllOpenOrdersController.default();
const findAllClosedOrdersController = new _FindAllClosedOrdersController.default();
const closeOrdersController = new _CloseOrderController.default();
const deleteOrderByIdController = new _DeleteOrderByIdController.default();
ordersRouter.get('/closed', _ensureAuthenticated.default, findAllClosedOrdersController.show);
ordersRouter.get('/open', _ensureAuthenticated.default, findAllOpenOrdersController.show);
ordersRouter.post('/', ordersController.create);
ordersRouter.put('/close/:id', _ensureAuthenticated.default, closeOrdersController.execute);
ordersRouter.post('/delete/:id', _ensureAuthenticated.default, deleteOrderByIdController.execute);
ordersRouter.get('/:id', _ensureAuthenticated.default, findOneOrderController.show);
var _default = ordersRouter;
exports.default = _default;