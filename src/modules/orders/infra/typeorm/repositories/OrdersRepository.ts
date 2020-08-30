import { getRepository, Repository } from 'typeorm';

import IOrdersRepository from '@modules/orders/repositories/IOrdersRepository';
import ICreateOrderDTO from '@modules/orders/dtos/ICreateOrderDTO';
import Product from '@modules/products/infra/typeorm/entities/Product';
import Order from '../entities/Order';

class OrdersRepository implements IOrdersRepository {
  private ormRepository: Repository<Order>;

  private productRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Order);
    this.productRepository = getRepository(Product);
  }

  public async create({
    customer_name,
    customer_address,
    payment_method,
    products,
  }: ICreateOrderDTO): Promise<Order> {
    const order = this.ormRepository.create({
      order_products: products,
      customer_address,
      payment_method,
      customer_name,
      status: 'open',
    });

    await this.ormRepository.save(order);

    return order;
  }

  public async findById(id: string): Promise<Order | undefined> {
    const order = await this.ormRepository.findOne({
      where: {
        id,
      },
    });

    return order;
  }

  public async showAllOpenOrders(): Promise<Order[] | undefined> {
    const orders = await this.ormRepository.find({
      relations: ['order_products'],
      where: { status: 'open' },
    });
    return orders;
  }

  public async showAllClosedOrders(): Promise<Order[] | undefined> {
    const orders = await this.ormRepository.find({
      relations: ['order_products'],
      where: { status: 'closed' },
    });
    return orders;
  }

  public async deleteOrderById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async save(order: Order): Promise<void> {
    await this.ormRepository.save(order);
  }
}

export default OrdersRepository;
