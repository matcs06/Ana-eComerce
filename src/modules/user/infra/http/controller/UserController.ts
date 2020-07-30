import { Request, Response } from 'express';

import CreateUserService from '@modules/user/services/CreateUserService';
import { classToClass } from 'class-transformer';
import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, admin_key } = request.body;

    const CreateUser = container.resolve(CreateUserService);

    const user = await CreateUser.execute({
      email,
      name,
      password,
      admin_key,
    });

    return response.json(classToClass(user));
  }
}
