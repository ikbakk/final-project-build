"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = exports.Product = exports.Comment = void 0;
const comment_1 = __importDefault(require("./comment"));
exports.Comment = comment_1.default;
const product_1 = __importDefault(require("./product"));
exports.Product = product_1.default;
const video_1 = __importDefault(require("./video"));
exports.Video = video_1.default;
