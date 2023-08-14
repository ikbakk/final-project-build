"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const videoSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});
videoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});
const Video = (0, mongoose_1.model)('Video', videoSchema);
exports.default = Video;
