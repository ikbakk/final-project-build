"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRouter = exports.commentsRouter = exports.productsRouter = exports.videosRouter = void 0;
const videos_1 = __importDefault(require("./videos"));
exports.videosRouter = videos_1.default;
const products_1 = __importDefault(require("./products"));
exports.productsRouter = products_1.default;
const comments_1 = __importDefault(require("./comments"));
exports.commentsRouter = comments_1.default;
const searchedItems_1 = __importDefault(require("./searchedItems"));
exports.searchRouter = searchedItems_1.default;
