"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable no-empty */
class DiskStorageProvider {
  constructor() {
    this.storage = [];
  }

  async saveFile(file) {
    this.storage.push(file);
    return file;
  }

  async deleteFile(file) {
    const findIndex = this.storage.findIndex(storagedFile => storagedFile === file);
    this.storage.splice(findIndex, 1);
  }

}

var _default = DiskStorageProvider;
exports.default = _default;