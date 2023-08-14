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
exports.searchVideosByTitle = exports.createNewVideo = exports.validateVideoId = exports.fetchAllVideos = void 0;
const models_1 = require("../models");
const customErrors_1 = require("../utils/customErrors");
const fetchAllVideos = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Video.find();
});
exports.fetchAllVideos = fetchAllVideos;
const validateVideoId = (videoID) => __awaiter(void 0, void 0, void 0, function* () {
    if (!videoID) {
        throw new customErrors_1.BadRequestError('Video ID is required');
    }
    try {
        const video = yield models_1.Video.findById(videoID);
        return video;
    }
    catch (_a) {
        throw new customErrors_1.NotFoundError('Video not found');
    }
});
exports.validateVideoId = validateVideoId;
const createNewVideo = (title, url) => __awaiter(void 0, void 0, void 0, function* () {
    if (!title || !url) {
        throw new customErrors_1.BadRequestError('Missing required attributes');
    }
    const video = new models_1.Video({
        title,
        url
    });
    yield video.save();
});
exports.createNewVideo = createNewVideo;
const searchVideosByTitle = (title) => {
    if (!title) {
        throw new customErrors_1.BadRequestError('Title is required');
    }
    const regex = new RegExp(title, 'i');
    const videos = models_1.Video.find({ title: { $regex: regex } });
    return videos;
};
exports.searchVideosByTitle = searchVideosByTitle;
