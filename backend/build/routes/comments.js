"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_1 = require("../controllers/comments");
const commentsRouter = (0, express_1.Router)();
commentsRouter.get("/:videoID", comments_1.getComments);
commentsRouter.post("/:videoID", comments_1.submitComment);
exports.default = commentsRouter;
