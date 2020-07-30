import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';

export default class OrdersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      customer_name,
      customer_address,
      payment_method,
      products,
    } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      customer_address,
      customer_name,
      payment_method,
      products,
    });

    return response.json(order);
  }
}
