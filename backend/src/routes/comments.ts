import { Router } from "express";
import { getComments, submitComment } from "../controllers/comments";

const commentsRouter = Router();

commentsRouter.get("/:videoID", getComments);
commentsRouter.post("/:videoID", submitComment);

export default commentsRouter;
