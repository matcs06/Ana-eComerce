"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _FindAllOpenOrdersService = _interopRequireDefault(require("../../../services/FindAllOpenOrdersService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FindAllOpenOrdersController {
  async show(request, response) {
    const findOrder = _tsyringe.container.resolve(_FindAllOpenOrdersService.default);

    const orders = await findOrder.execute();
    return response.json(orders);
  }

}

exports.default = FindAllOpenOrdersController;