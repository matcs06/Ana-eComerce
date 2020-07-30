import { Router } from 'express';

import ensureAuthenticated from '@modules/user/infra/http/middlewares/ensureAuthenticated';
import CreateOrdersController from '../controller/CreateOrdersController';
import FindOneOrderByIdController from '../controller/FindOneOrderController';
import FindAllOpenOrdersController from '../controller/FindAllOpenOrdersController';
import FindAllClosedOrdersController from '../controller/FindAllClosedOrdersController';
import CloseOrderController from '../controller/CloseOrderController';

const ordersRouter = Router();
const ordersController = new CreateOrdersController();
const findOneOrderController = new FindOneOrderByIdController();
const findAllOpenOrdersController = new FindAllOpenOrdersController();
const findAllClosedOrdersController = new FindAllClosedOrdersController();
const closeOrdersController = new CloseOrderController();

ordersRouter.get(
  '/closed',
  ensureAuthenticated,
  findAllClosedOrdersController.show,
);
ordersRouter.get(
  '/open',
  ensureAuthenticated,
  findAllOpenOrdersController.show,
);

ordersRouter.post('/', ordersController.create);
ordersRouter.put(
  '/close/:id',
  ensureAuthenticated,
  closeOrdersController.execute,
);

ordersRouter.get('/:id', ensureAuthenticated, findOneOrderController.show);

export default ordersRouter;
