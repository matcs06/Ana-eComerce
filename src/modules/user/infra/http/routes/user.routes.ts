import { Router } from 'express';

import UserController from '../controller/UserController';
import AuthenticationUserController from '../controller/AuthenticationContoller';

const customersRouter = Router();
const userController = new UserController();
const authenticationUserController = new AuthenticationUserController();

customersRouter.post('/', userController.create);

customersRouter.post('/session', authenticationUserController.create);

export default customersRouter;
