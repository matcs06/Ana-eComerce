import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeleteOrderByIdService from '@modules/orders/services/DeleteOrderByIdService';

export default class DeleteOrderByIdController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const deleteOrder = container.resolve(DeleteOrderByIdService);

    await deleteOrder.execute({ id });

    return response
      .status(200)
      .json({ message: 'Order successfully deleted!!' });
  }
}
