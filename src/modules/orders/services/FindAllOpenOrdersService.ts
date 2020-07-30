import { inject, injectable } from 'tsyringe';

import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';
import AppError from '@shared/errors/AppError';

@injectable()
class FindAllOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(): Promise<Order[] | undefined> {
    const order = await this.ordersRepository.showAllOpenOrders();

    if (!order) {
      throw new AppError('There are no orders yet');
    }

    return order;
  }
}

export default FindAllOrdersService;
