import { Comment } from "../models";
import { BadRequestError } from "../utils/customErrors";
import { validateVideoId } from "./videos";
import { CommentSchema } from "../types/models";
import { NewCommentAttribute } from "../types/services";

export const fetchCommentsByVideoId = async (
  videoID: string
): Promise<CommentSchema[]> => {
  await validateVideoId(videoID);
  const comments = await Comment.find({ videoID });
  return comments;
};

export const createNewComment = async ({
  videoID,
  comment,
  username,
}: NewCommentAttribute): Promise<CommentSchema> => {
  if (!videoID || !comment || !username) {
    throw new BadRequestError("Missing required attributes");
  }

  await validateVideoId(videoID);
  const newComment = new Comment({
    videoID,
    username,
    comment,
  });
  await newComment.save();

  return newComment;
};
