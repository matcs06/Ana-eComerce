"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IProductsRepository = _interopRequireDefault(require("../../products/repositories/IProductsRepository"));

var _IOrdersRepository = _interopRequireDefault(require("../repositories/IOrdersRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateOrderService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('OrdersRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ProductsRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IOrdersRepository.default === "undefined" ? Object : _IOrdersRepository.default, typeof _IProductsRepository.default === "undefined" ? Object : _IProductsRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateOrderService {
  constructor(ordersRepository, productsRepository) {
    this.ordersRepository = ordersRepository;
    this.productsRepository = productsRepository;
  }

  async execute({
    customer_name,
    customer_address,
    payment_method,
    phone,
    products
  }) {
    const givenProductIds = products.map(product => {
      return {
        id: product.id
      };
    });
    const existentProducts = await this.productsRepository.findAllById(givenProductIds);

    if (!existentProducts.length) {
      throw new _AppError.default('Could not find any products with the given ids');
    }

    const productsData = existentProducts.map(existentProduct => {
      const productData = products.find(productFound => productFound.id === existentProduct.id);
      return {
        product_id: existentProduct.id,
        price: existentProduct.price,
        quantity: productData?.quantity || 0
      };
    });

    if (!phone) {
      throw new _AppError.default('Phone number must be specified');
    }

    await this.productsRepository.updateQuantity(products);
    const order = await this.ordersRepository.create({
      customer_address,
      customer_name,
      payment_method,
      phone,
      products: productsData
    });
    return order;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = CreateOrderService;
exports.default = _default;