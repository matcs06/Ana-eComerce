import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import path from 'path';
import IProductRepository from '../repositories/IProductsRepository';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const uploadPath = path.resolve(
  path.resolve(__dirname, '..', '..', '..', 'uploads'),
);

interface IRequest {
  id: string;
}

@injectable()
class DeleteProductByIdService {
  constructor(
    @inject('ProductsRepository')
    private productRepository: IProductRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<void> {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError('Product not found');
    } else {
      const immagePath = path.resolve(uploadPath, product?.image_url);
      await fs.promises.unlink(immagePath);
    }

    this.productRepository.deleteById(id);
  }
}

export default DeleteProductByIdService;
