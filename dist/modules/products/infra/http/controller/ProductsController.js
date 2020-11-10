"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateProductService = _interopRequireDefault(require("../../../services/CreateProductService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProductsController {
  async create(request, response) {
    const {
      name,
      quantity,
      price,
      description
    } = request.body;
    const {
      filename
    } = request.file;

    const createProduct = _tsyringe.container.resolve(_CreateProductService.default);

    const product = await createProduct.execute({
      name,
      quantity,
      price,
      description,
      image_name: filename
    });
    return response.json((0, _classTransformer.classToClass)(product));
  }

}

exports.default = ProductsController;