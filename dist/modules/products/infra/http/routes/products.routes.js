"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _upload = _interopRequireDefault(require("../../../../../config/upload"));

var _ensureAuthenticated = _interopRequireDefault(require("../../../../user/infra/http/middlewares/ensureAuthenticated"));

var _ProductsController = _interopRequireDefault(require("../controller/ProductsController"));

var _AddProductController = _interopRequireDefault(require("../controller/AddProductController"));

var _FindAllProductsController = _interopRequireDefault(require("../controller/FindAllProductsController"));

var _FindOneProductByIdController = _interopRequireDefault(require("../controller/FindOneProductByIdController"));

var _ListAvailableProductsController = _interopRequireDefault(require("../controller/ListAvailableProductsController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const productsRouter = (0, _express.Router)();
const productsController = new _ProductsController.default();
const updateProductsController = new _AddProductController.default();
const findAllProducts = new _FindAllProductsController.default();
const findOneProducById = new _FindOneProductByIdController.default();
const listAvailableProducts = new _ListAvailableProductsController.default();
const upload = (0, _multer.default)(_upload.default.multer);
productsRouter.post('/', _ensureAuthenticated.default, upload.single('filename'), productsController.create);
productsRouter.post('/update-quantity', _ensureAuthenticated.default, updateProductsController.create);
productsRouter.get('/', findAllProducts.show);
productsRouter.get('/available', listAvailableProducts.show);
productsRouter.get('/:id', findOneProducById.show);
var _default = productsRouter;
exports.default = _default;