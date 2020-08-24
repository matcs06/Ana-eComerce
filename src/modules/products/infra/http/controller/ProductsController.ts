import { Request, Response } from 'express';

import { container } from 'tsyringe';
import CreateProductService from '@modules/products/services/CreateProductService';
import { classToClass } from 'class-transformer';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, quantity, price } = request.body;
    const { filename } = request.file;
    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      quantity,
      price,
      image_name: filename,
    });

    return response.json(classToClass(product));
  }
}
