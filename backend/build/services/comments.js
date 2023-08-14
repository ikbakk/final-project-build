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
exports.createNewComment = exports.fetchCommentsByVideoId = void 0;
const models_1 = require("../models");
const customErrors_1 = require("../utils/customErrors");
const videos_1 = require("./videos");
const fetchCommentsByVideoId = (videoID) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, videos_1.validateVideoId)(videoID);
    const comments = yield models_1.Comment.find({ videoID });
    return comments;
});
exports.fetchCommentsByVideoId = fetchCommentsByVideoId;
const createNewComment = ({ videoID, comment, username, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!videoID || !comment || !username) {
        throw new customErrors_1.BadRequestError("Missing required attributes");
    }
    yield (0, videos_1.validateVideoId)(videoID);
    const newComment = new models_1.Comment({
        videoID,
        username,
        comment,
    });
    yield newComment.save();
    return newComment;
});
exports.createNewComment = createNewComment;
