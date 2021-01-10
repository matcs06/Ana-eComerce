import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/user/infra/http/middlewares/ensureAuthenticated';
import ProductsController from '../controller/ProductsController';
import UpdateProductsQuantity from '../controller/AddProductController';
import FindAllProductsController from '../controller/FindAllProductsController';
import FindOneProductByIdController from '../controller/FindOneProductByIdController';
import ListProductsAvailableController from '../controller/ListAvailableProductsController';
import DeleteProductByIdController from '../controller/DeleteProductByIdController';

const productsRouter = Router();
const productsController = new ProductsController();
const updateProductsController = new UpdateProductsQuantity();
const findAllProducts = new FindAllProductsController();
const findOneProducById = new FindOneProductByIdController();
const listAvailableProducts = new ListProductsAvailableController();
const deleteProductById = new DeleteProductByIdController();

const upload = multer(uploadConfig.multer);

productsRouter.post(
  '/',
  ensureAuthenticated,
  upload.single('filename'),
  productsController.create,
);
productsRouter.post(
  '/update-quantity',
  ensureAuthenticated,
  updateProductsController.create,
);

productsRouter.get('/', ensureAuthenticated, findAllProducts.show);
productsRouter.get('/available', listAvailableProducts.show);
productsRouter.get('/:id', findOneProducById.show);

productsRouter.delete('/:id', ensureAuthenticated, deleteProductById.execute);

export default productsRouter;
