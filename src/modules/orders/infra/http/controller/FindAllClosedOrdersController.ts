import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindAllClosedOrdersService from '@modules/orders/services/FindAllClosedOrdersService';

export default class FindAllClosedOrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const findOrder = container.resolve(FindAllClosedOrdersService);

    const orders = await findOrder.execute();

    return response.json(orders);
  }
}
