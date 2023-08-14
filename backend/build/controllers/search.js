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
exports.searchVideos = void 0;
const videos_1 = require("../services/videos");
const customResponses_1 = require("../utils/customResponses");
const searchVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.query;
        const videos = yield (0, videos_1.searchVideosByTitle)(title);
        res.status(200).json({ status: "Success", data: videos });
    }
    catch (err) {
        (0, customResponses_1.errorResponse)(err, res);
    }
});
exports.searchVideos = searchVideos;
