import Order from '../infra/typeorm/entities/Order';

import ICreateOrderDTO from '../dtos/ICreateOrderDTO';

export default interface IOrdersRepository {
  create(data: ICreateOrderDTO): Promise<Order>;
  findById(id: string): Promise<Order | undefined>;
  showAllOpenOrders(): Promise<Order[] | undefined>;
  showAllClosedOrders(): Promise<Order[] | undefined>;
  deleteOrderById(id: string): Promise<void>;
  save(data: Order): Promise<void>;
}
