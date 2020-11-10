"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _FindAllProductsService = _interopRequireDefault(require("../../../services/FindAllProductsService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FindAllProductsController {
  async show(request, response) {
    const findProducts = _tsyringe.container.resolve(_FindAllProductsService.default);

    const product = await findProducts.execute();
    return response.json((0, _classTransformer.classToClass)(product));
  }

}

exports.default = FindAllProductsController;