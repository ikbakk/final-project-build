"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const videos_1 = require("../controllers/videos");
const videosRouter = (0, express_1.Router)();
videosRouter.get("/", videos_1.getAllVideos);
videosRouter.post("/", videos_1.addVideo);
exports.default = videosRouter;
