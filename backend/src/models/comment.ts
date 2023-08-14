import { Schema, model, Types } from "mongoose";
import { CommentSchema } from "../types/models";

const commentSchema = new Schema<CommentSchema>({
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
    type: Types.ObjectId,
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

const Comment = model<CommentSchema>("Comment", commentSchema);

export default Comment;
