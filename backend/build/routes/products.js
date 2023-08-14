"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_1 = require("../controllers/products");
const productsRouter = (0, express_1.Router)();
productsRouter.get("/:videoID", products_1.getProducts);
productsRouter.post("/:videoID", products_1.addProduct);
exports.default = productsRouter;
