/* eslint-disable no-empty */
import path from 'path';
import uploadConfig from '@config/upload';
import IStorageProvider from '../models/ISttoregeProvider';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file),
    );
    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {}

    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;
