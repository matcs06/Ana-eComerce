"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _AppError = _interopRequireDefault(require("../../../../../shared/errors/AppError"));

var _Product = _interopRequireDefault(require("../entities/Product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ProductsRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Product.default);
  }

  async create({
    name,
    price,
    description,
    quantity,
    image_name
  }) {
    const product = this.ormRepository.create({
      name,
      price,
      description,
      quantity,
      image_url: image_name
    });
    await this.ormRepository.save(product);
    return product;
  }

  async findByName(name) {
    const product = await this.ormRepository.findOne({
      where: {
        name
      }
    });
    return product;
  }

  async findById(id) {
    const product = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return product;
  }

  async findAllById(products) {
    const allProductsByID = products.map(product => product.id);
    const productsById = await this.ormRepository.find({
      where: {
        id: (0, _typeorm.In)(allProductsByID)
      }
    });
    return productsById;
  }

  async updateQuantity(products) {
    const productsData = await this.findAllById(products);
    const productsToUpdate = productsData.map(productData => {
      const foundProduct = products.find(product => product.id === productData.id);

      if (!foundProduct) {
        throw new _AppError.default('Product not found');
      }

      if (productData.quantity < foundProduct.quantity) {
        throw new _AppError.default('Product quantity not available in stock');
      }

      const productUpdated = productData;
      productUpdated.quantity -= foundProduct.quantity;
      return productUpdated;
    });
    await this.ormRepository.save(productsToUpdate);
    return productsToUpdate;
  }

  async findAll() {
    const products = await this.ormRepository.find();
    return products;
  }

  async save(product) {
    await this.ormRepository.save(product);
  }

}

var _default = ProductsRepository;
exports.default = _default;