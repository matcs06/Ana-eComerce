"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _FindAllClosedOrdersService = _interopRequireDefault(require("../../../services/FindAllClosedOrdersService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FindAllClosedOrdersController {
  async show(request, response) {
    const findOrder = _tsyringe.container.resolve(_FindAllClosedOrdersService.default);

    const orders = await findOrder.execute();
    return response.json(orders);
  }

}

exports.default = FindAllClosedOrdersController;