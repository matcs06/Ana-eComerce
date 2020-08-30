import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteOrderById {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const order = await this.ordersRepository.findById(id);

    if (!order) {
      throw new AppError('Order not found');
    }

    this.ordersRepository.deleteOrderById(id);
  }
}

export default DeleteOrderById;
