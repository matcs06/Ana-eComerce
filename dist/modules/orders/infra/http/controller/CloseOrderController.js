"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CloseOrderService = _interopRequireDefault(require("../../../services/CloseOrderService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FindAllClosedOrdersController {
  async execute(request, response) {
    const {
      id
    } = request.params;

    const changeOrderStatus = _tsyringe.container.resolve(_CloseOrderService.default);

    await changeOrderStatus.execute({
      id
    });
    return response.status(200).json({
      message: 'Order successfully closed!!'
    });
  }

}

exports.default = FindAllClosedOrdersController;