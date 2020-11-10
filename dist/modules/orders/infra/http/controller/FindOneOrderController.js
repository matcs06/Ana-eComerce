"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _FindOneOrderByIdService = _interopRequireDefault(require("../../../services/FindOneOrderByIdService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FindOneOrderByIdController {
  async show(request, response) {
    const {
      id
    } = request.params;

    const findOrder = _tsyringe.container.resolve(_FindOneOrderByIdService.default);

    const order = await findOrder.execute({
      id
    });
    return response.json(order);
  }

}

exports.default = FindOneOrderByIdController;