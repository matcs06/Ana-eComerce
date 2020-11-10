"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CreateUserService = _interopRequireDefault(require("../../../services/CreateUserService"));

var _classTransformer = require("class-transformer");

var _tsyringe = require("tsyringe");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CustomersController {
  async create(request, response) {
    const {
      name,
      email,
      password,
      admin_key
    } = request.body;

    const CreateUser = _tsyringe.container.resolve(_CreateUserService.default);

    const user = await CreateUser.execute({
      email,
      name,
      password,
      admin_key
    });
    return response.json((0, _classTransformer.classToClass)(user));
  }

}

exports.default = CustomersController;