import { inject, injectable } from 'tsyringe';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';
import AppError from '@shared/errors/AppError';

@injectable()
class FindAllOrdersService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(product_id: string): Promise<Product | undefined> {
    const product = await this.productsRepository.findById(product_id);

    if (!product) {
      throw new AppError('There products here!!');
    }

    return product;
  }
}

export default FindAllOrdersService;
