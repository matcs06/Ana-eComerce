import Product from '../infra/typeorm/entities/Product';

import ICreateProductDTO from '../dtos/ICreateProductDTO';
import IUpdateProductsQuantityDTO from '../dtos/IUpdateProductsQuantityDTO';

interface IFindProducts {
  id: string;
}

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product | undefined>;
  findById(product_id: string): Promise<Product | undefined>;
  findAllById(products: IFindProducts[]): Promise<Product[]>;
  updateQuantity(products: IUpdateProductsQuantityDTO[]): Promise<Product[]>;
  findAll(): Promise<Product[] | undefined>;
  save(product: Product): Promise<void>;
  deleteById(id: string): Promise<void>;
}
