import { Request, Response, response } from 'express';
import { container } from 'tsyringe';
import CloseOrderService from '@modules/orders/services/CloseOrderService';

export default class FindAllClosedOrdersController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const changeOrderStatus = container.resolve(CloseOrderService);

    await changeOrderStatus.execute({ id });

    return response
      .status(200)
      .json({ message: 'Order successfully closed!!' });
  }
}
