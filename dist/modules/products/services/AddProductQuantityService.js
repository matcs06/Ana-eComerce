"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IProductsRepository = _interopRequireDefault(require("../repositories/IProductsRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AddProductQuantityService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class AddProductQuantityService {
  constructor(productsRepository) {
    this.productsRepository = productsRepository;
  }

  async execute(product) {
    const productToAdd = await this.productsRepository.findById(product.id);

    if (!productToAdd) {
      throw new _AppError.default('There is not a product with this id');
    }

    if (product.quantity <= 0) {
      throw new _AppError.default('The quantity has to be greater than 0');
    }

    productToAdd.quantity += product.quantity;
    await this.productsRepository.save(productToAdd);
    return productToAdd;
  }

}) || _class) || _class) || _class) || _class);
var _default = AddProductQuantityService;
exports.default = _default;