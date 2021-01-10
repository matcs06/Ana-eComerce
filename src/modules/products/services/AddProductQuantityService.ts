import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Product from '../infra/typeorm/entities/Product';
import IProductsRepository from '../repositories/IProductsRepository';
import IUpdateProductsQuantityDTO from '../dtos/IUpdateProductsQuantityDTO';

@injectable()
class AddProductQuantityService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute(product: IUpdateProductsQuantityDTO): Promise<Product> {
    const productToAdd = await this.productsRepository.findById(product.id);

    if (!productToAdd) {
      throw new AppError('There is not a product with this id');
    }

    productToAdd.quantity += product.quantity;

    await this.productsRepository.save(productToAdd);

    return productToAdd;
  }
}

export default AddProductQuantityService;
