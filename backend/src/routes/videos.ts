import { Router } from "express";
import { addVideo, getAllVideos } from "../controllers/videos";

const videosRouter = Router();

videosRouter.get("/", getAllVideos);
videosRouter.post("/", addVideo);

export default videosRouter;
