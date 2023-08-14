"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getProducts = void 0;
const products_1 = require("../services/products");
const customResponses_1 = require("../utils/customResponses");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { videoID } = req.params;
        const products = yield (0, products_1.fetchProductByVideoId)(videoID);
        res.status(200).json({ status: "Success", data: products });
    }
    catch (err) {
        (0, customResponses_1.errorResponse)(err, res);
    }
});
exports.getProducts = getProducts;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { videoID } = req.params;
        const { title, price, urlProduct } = req.body;
        const requiredAttributes = {
            title,
            price,
            urlProduct,
            videoID,
        };
        yield (0, products_1.createNewProduct)(requiredAttributes);
        res.status(201).json({ status: "Success" });
    }
    catch (err) {
        res.status(400).json({ status: "Failed" });
    }
});
exports.addProduct = addProduct;
