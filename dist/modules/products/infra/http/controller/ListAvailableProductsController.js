"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ListProductsAvailable = _interopRequireDefault(require("../../../services/ListProductsAvailable"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListProductsAvailableController {
  async show(request, response) {
    const findProducts = _tsyringe.container.resolve(_ListProductsAvailable.default);

    const products = await findProducts.execute();
    return response.json((0, _classTransformer.classToClass)(products));
  }

}

exports.default = ListProductsAvailableController;