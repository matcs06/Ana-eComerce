"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _FindOneProducByIdService = _interopRequireDefault(require("../../../services/FindOneProducByIdService"));

var _classTransformer = require("class-transformer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FindOneProductByIdController {
  async show(request, response) {
    const {
      id
    } = request.params;

    const findProduct = _tsyringe.container.resolve(_FindOneProducByIdService.default);

    const product = await findProduct.execute(id);
    return response.json((0, _classTransformer.classToClass)(product));
  }

}

exports.default = FindOneProductByIdController;