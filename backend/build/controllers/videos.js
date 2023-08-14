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
exports.addVideo = exports.getAllVideos = void 0;
const videos_1 = require("../services/videos");
const customResponses_1 = require("../utils/customResponses");
const getAllVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield (0, videos_1.fetchAllVideos)();
        res.status(200).json({ status: "Success", data: videos });
    }
    catch (err) {
        (0, customResponses_1.errorResponse)(err, res);
    }
});
exports.getAllVideos = getAllVideos;
const addVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, url } = req.body;
        yield (0, videos_1.createNewVideo)(title, url);
        res.status(201).json({ status: "success" });
    }
    catch (err) {
        (0, customResponses_1.errorResponse)(err, res);
    }
});
exports.addVideo = addVideo;
