"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _DeleteOrderByIdService = _interopRequireDefault(require("../../../services/DeleteOrderByIdService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DeleteOrderByIdController {
  async execute(request, response) {
    const {
      id
    } = request.params;

    const deleteOrder = _tsyringe.container.resolve(_DeleteOrderByIdService.default);

    await deleteOrder.execute({
      id
    });
    return response.status(200).json({
      message: 'Order successfully deleted!!'
    });
  }

}

exports.default = DeleteOrderByIdController;