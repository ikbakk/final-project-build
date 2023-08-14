"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const searchedItems_1 = require("../controllers/searchedItems");
const searchRouter = (0, express_1.Router)();
searchRouter.get("/videos", searchedItems_1.searchVideos);
searchRouter.get("/products", searchedItems_1.searchProducts);
exports.default = searchRouter;
