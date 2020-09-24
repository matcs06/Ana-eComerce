import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IProduct {
  id: string;
  quantity: number;
}

interface IRequest {
  customer_name: string;
  customer_address: string;
  payment_method: string;
  phone: string;
  products: IProduct[];
}

@injectable()
class CreateOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    customer_name,
    customer_address,
    payment_method,
    phone,
    products,
  }: IRequest): Promise<Order> {
    const givenProductIds = products.map(product => {
      return { id: product.id };
    });

    const existentProducts = await this.productsRepository.findAllById(
      givenProductIds,
    );
    if (!existentProducts.length) {
      throw new AppError('Could not find any products with the given ids');
    }

    const productsData = existentProducts.map(existentProduct => {
      const productData = products.find(
        productFound => productFound.id === existentProduct.id,
      );

      return {
        product_id: existentProduct.id,
        price: existentProduct.price,
        quantity: productData?.quantity || 0,
      };
    });

    if (!phone) {
      throw new AppError('Phone number must be specified');
    }

    await this.productsRepository.updateQuantity(products);

    const order = await this.ordersRepository.create({
      customer_address,
      customer_name,
      payment_method,
      phone,
      products: productsData,
    });
    return order;
  }
}

export default CreateOrderService;
