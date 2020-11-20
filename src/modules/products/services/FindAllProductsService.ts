import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class FindAllProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<Product[] | undefined> {
    const products = await this.productsRepository.findAll();

    if (!products) {
      throw new AppError('There are no products here!!');
    }

    return products;
  }
}

export default FindAllProductsService;
