"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Product = _interopRequireDefault(require("../../../../products/infra/typeorm/entities/Product"));

var _Order = _interopRequireDefault(require("../entities/Order"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrdersRepository {
  constructor() {
    this.ormRepository = void 0;
    this.productRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Order.default);
    this.productRepository = (0, _typeorm.getRepository)(_Product.default);
  }

  async create({
    customer_name,
    customer_address,
    payment_method,
    phone,
    products
  }) {
    const order = this.ormRepository.create({
      order_products: products,
      customer_address,
      payment_method,
      phone,
      customer_name,
      status: 'open'
    });
    await this.ormRepository.save(order);
    return order;
  }

  async findById(id) {
    const order = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return order;
  }

  async showAllOpenOrders() {
    const orders = await this.ormRepository.find({
      relations: ['order_products'],
      where: {
        status: 'open'
      }
    });
    return orders;
  }

  async showAllClosedOrders() {
    const orders = await this.ormRepository.find({
      relations: ['order_products'],
      where: {
        status: 'closed'
      }
    });
    return orders;
  }

  async deleteOrderById(id) {
    await this.ormRepository.delete(id);
  }

  async save(order) {
    await this.ormRepository.save(order);
  }

}

var _default = OrdersRepository;
exports.default = _default;