import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

@injectable()
class FindAllClosedOrdersService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute(): Promise<Order[] | undefined> {
    const order = await this.ordersRepository.showAllClosedOrders();

    if (!order) {
      throw new AppError('There are no orders yet');
    }

    return order;
  }
}

export default FindAllClosedOrdersService;
