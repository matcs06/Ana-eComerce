import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IRequest {
  id: string;
}

@injectable()
class CloseOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const order = await this.ordersRepository.findById(id);

    if (!order) {
      throw new AppError('Order not found');
    }

    if (order.status === 'closed') {
      throw new AppError('This order has already been closed');
    }

    order.status = 'closed';

    const updatedOrder = order;

    await this.ordersRepository.save(updatedOrder);
  }
}

export default CloseOrderService;
