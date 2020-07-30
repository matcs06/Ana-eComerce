import { Request, Response } from 'express';

import { container } from 'tsyringe';
import FindOneProducByIdService from '@modules/products/services/FindOneProducByIdService';
import { classToClass } from 'class-transformer';

export default class FindOneProductByIdController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findProduct = container.resolve(FindOneProducByIdService);

    const product = await findProduct.execute(id);

    return response.json(classToClass(product));
  }
}
