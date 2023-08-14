"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    videoID: {
        type: mongoose_1.Types.ObjectId,
        ref: "Video",
        required: true,
    },
});
commentSchema.set("toJSON", {
    transform: function (document, returnedObject) {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});
const Comment = (0, mongoose_1.model)("Comment", commentSchema);
exports.default = Comment;
