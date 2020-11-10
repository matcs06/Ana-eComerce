"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _upload = _interopRequireDefault(require("../../../../../config/upload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-empty */
const fs = require('fs');

class DiskStorageProvider {
  async saveFile(file) {
    await fs.promises.rename(_path.default.resolve(_upload.default.tmpFolder, file), _path.default.resolve(_upload.default.uploadsFolder, file));
    return file;
  }

  async deleteFile(file) {
    const filePath = _path.default.resolve(_upload.default.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {}

    await fs.promises.unlink(filePath);
  }

}

var _default = DiskStorageProvider;
exports.default = _default;