import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';

@injectable()
class ListProductsAvailableService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(): Promise<Product[] | undefined> {
    const products = await this.productsRepository.findAll();

    if (!products) {
      throw new AppError('There are no products here!!');
    }

    const availableProductsinStock = products.filter(
      product => product.quantity > 0,
    );

    return availableProductsinStock;
  }
}

export default ListProductsAvailableService;
