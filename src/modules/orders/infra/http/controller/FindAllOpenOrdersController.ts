import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindAllOpenOrdersService from '@modules/orders/services/FindAllOpenOrdersService';

export default class FindAllOpenOrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    const findOrder = container.resolve(FindAllOpenOrdersService);

    const orders = await findOrder.execute();

    return response.json(orders);
  }
}
