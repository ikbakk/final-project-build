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
exports.submitComment = exports.getComments = void 0;
const comments_1 = require("../services/comments");
const customResponses_1 = require("../utils/customResponses");
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { videoID } = req.params;
        const comments = yield (0, comments_1.fetchCommentsByVideoId)(videoID);
        res.status(200).json({ status: "Success", data: comments });
    }
    catch (err) {
        (0, customResponses_1.errorResponse)(err, res);
    }
});
exports.getComments = getComments;
const submitComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { videoID } = req.params;
        const { username, comment } = req.body;
        const requiredAttributes = {
            videoID,
            username,
            comment,
        };
        const newComment = yield (0, comments_1.createNewComment)(Object.assign({}, requiredAttributes));
        res.status(201).json({ status: "Success", data: newComment });
    }
    catch (err) {
        (0, customResponses_1.errorResponse)(err, res);
    }
});
exports.submitComment = submitComment;
