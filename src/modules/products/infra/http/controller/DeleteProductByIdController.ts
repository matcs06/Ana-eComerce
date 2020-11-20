import { Request, Response } from 'express';
import { container } from 'tsyringe';
import DeletProductByIdService from '@modules/products/services/DeleteProductByIdService';

export default class DeleteProductByIdController {
  public async execute(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { id } = request.params;

    const deleteProduct = container.resolve(DeletProductByIdService);

    await deleteProduct.execute({ id });

    return response
      .status(200)
      .json({ message: 'Product successfully deleted!!' });
  }
}
