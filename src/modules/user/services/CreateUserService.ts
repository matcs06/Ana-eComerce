import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';
import IHashProvider from '../providers/HashProvider/models/IHashProvider';

import Credentials from '../../../credential/index';

interface IRequest {
  name: string;
  email: string;
  password: string;
  admin_key: string;
}

@injectable()
class CreateCustomerService {
  constructor(
    @inject('HashProvider')
    private hashProvider: IHashProvider,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    name,
    email,
    password,
    admin_key,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (admin_key !== Credentials.createUserKey) {
      throw new AppError('You must have a valid key to create a new user');
    }

    if (checkUserExists) {
      throw new AppError('user already exists with the same e-mail');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const customer = await this.usersRepository.create({
      email,
      name,
      password: hashedPassword,
    });

    return customer;
  }
}

export default CreateCustomerService;
