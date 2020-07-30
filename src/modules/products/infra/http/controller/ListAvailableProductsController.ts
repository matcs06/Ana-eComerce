import { Request, Response } from 'express';

import { container } from 'tsyringe';
import ListProductsAvailable from '@modules/products/services/ListProductsAvailable';
import { classToClass } from 'class-transformer';

export default class ListProductsAvailableController {
  public async show(request: Request, response: Response): Promise<Response> {
    const findProducts = container.resolve(ListProductsAvailable);

    const products = await findProducts.execute();

    return response.json(classToClass(products));
  }
}
