import { Request, Response } from 'express';

import { container } from 'tsyringe';
import FindAllProductsService from '@modules/products/services/FindAllProductsService';
import { classToClass } from 'class-transformer';

export default class FindAllProductsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const findProducts = container.resolve(FindAllProductsService);

    const product = await findProducts.execute();

    return response.json(classToClass(product));
  }
}
