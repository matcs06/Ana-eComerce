"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateOrderService = _interopRequireDefault(require("../../../services/CreateOrderService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrdersController {
  async create(request, response) {
    const {
      customer_name,
      customer_address,
      payment_method,
      phone,
      products
    } = request.body;

    const createOrder = _tsyringe.container.resolve(_CreateOrderService.default);

    const order = await createOrder.execute({
      customer_address,
      customer_name,
      payment_method,
      phone,
      products
    });
    return response.json(order);
  }

}

exports.default = OrdersController;