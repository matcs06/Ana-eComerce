"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _UserController = _interopRequireDefault(require("../controller/UserController"));

var _AuthenticationContoller = _interopRequireDefault(require("../controller/AuthenticationContoller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const customersRouter = (0, _express.Router)();
const userController = new _UserController.default();
const authenticationUserController = new _AuthenticationContoller.default();
customersRouter.post('/', userController.create);
customersRouter.post('/session', authenticationUserController.create);
var _default = customersRouter;
exports.default = _default;