"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../../../../modules/user/infra/http/routes/user.routes"));

var _products = _interopRequireDefault(require("../../../../modules/products/infra/http/routes/products.routes"));

var _orders = _interopRequireDefault(require("../../../../modules/orders/infra/http/routes/orders.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.use('/users', _user.default);
routes.use('/products', _products.default);
routes.use('/orders', _orders.default);
var _default = routes;
exports.default = _default;