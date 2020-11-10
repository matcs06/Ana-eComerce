"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AddProductQuantityService = _interopRequireDefault(require("../../../services/AddProductQuantityService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProductsController {
  async create(request, response) {
    const {
      id,
      quantity
    } = request.body;

    const addQuantity = _tsyringe.container.resolve(_AddProductQuantityService.default);

    const product = await addQuantity.execute({
      id,
      quantity
    });
    return response.json((0, _classTransformer.classToClass)(product));
  }

}

exports.default = ProductsController;