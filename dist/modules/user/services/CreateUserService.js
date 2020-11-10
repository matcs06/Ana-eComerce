"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IUsersRepository = _interopRequireDefault(require("../repositories/IUsersRepository"));

var _IHashProvider = _interopRequireDefault(require("../providers/HashProvider/models/IHashProvider"));

var _index = _interopRequireDefault(require("../../../credential/index"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateCustomerService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('HashProvider')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('UsersRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IHashProvider.default === "undefined" ? Object : _IHashProvider.default, typeof _IUsersRepository.default === "undefined" ? Object : _IUsersRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateCustomerService {
  constructor(hashProvider, usersRepository) {
    this.hashProvider = hashProvider;
    this.usersRepository = usersRepository;
  }

  async execute({
    name,
    email,
    password,
    admin_key
  }) {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (admin_key !== _index.default.createUserKey) {
      throw new _AppError.default('You must have a valid key to create a new user');
    }

    if (checkUserExists) {
      throw new _AppError.default('user already exists with the same e-mail');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);
    const customer = await this.usersRepository.create({
      email,
      name,
      password: hashedPassword
    });
    return customer;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateCustomerService;
exports.default = _default;