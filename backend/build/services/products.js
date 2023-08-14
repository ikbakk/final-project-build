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
exports.searchProductsByTitle = exports.createNewProduct = exports.fetchProductByVideoId = void 0;
const models_1 = require("../models");
const videos_1 = require("./videos");
const customErrors_1 = require("../utils/customErrors");
const fetchProductByVideoId = (videoID) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, videos_1.validateVideoId)(videoID);
    const products = yield models_1.Product.find({ videoID });
    return products;
});
exports.fetchProductByVideoId = fetchProductByVideoId;
const createNewProduct = ({ title, price, urlProduct, videoID, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!title || !price || !urlProduct || !videoID) {
        throw new customErrors_1.BadRequestError("Missing required attributes");
    }
    yield (0, videos_1.validateVideoId)(videoID);
    const product = new models_1.Product({
        title,
        price,
        urlProduct,
        videoID,
    });
    yield product.save();
});
exports.createNewProduct = createNewProduct;
const searchProductsByTitle = (title) => __awaiter(void 0, void 0, void 0, function* () {
    if (!title) {
        throw new customErrors_1.BadRequestError("Title is required");
    }
    const regex = new RegExp(title, "i");
    const products = yield models_1.Product.find({ title: { $regex: regex } });
    return products;
});
exports.searchProductsByTitle = searchProductsByTitle;
