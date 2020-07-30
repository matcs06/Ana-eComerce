import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindOrderService from '@modules/orders/services/FindOneOrderByIdService';

export default class FindOneOrderByIdController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOrder = container.resolve(FindOrderService);

    const order = await findOrder.execute({ id });

    return response.json(order);
  }
}
