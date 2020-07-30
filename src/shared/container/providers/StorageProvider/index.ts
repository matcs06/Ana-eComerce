import { container } from 'tsyringe';
import uploadConfig from '@config/upload';

import IStorageProvider from './models/ISttoregeProvider';

import DiskStorageProvider from './implementations/DiskStorageProvide';
import S3StorageProvider from './implementations/S3StorageProvider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);
