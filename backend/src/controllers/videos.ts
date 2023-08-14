import { Request, Response } from "express";
import {
  createNewVideo,
  fetchAllVideos,
  searchVideosByTitle,
} from "../services/videos";
import { errorResponse } from "../utils/customResponses";
import { CustomErrors } from "../types/utils";
import { VideoReq } from "../types/controllers";

export const getAllVideos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const videos = await fetchAllVideos();
    res.status(200).json({ status: "Success", data: videos });
  } catch (err) {
    errorResponse(err as CustomErrors, res);
  }
};

export const addVideo = async (req: VideoReq, res: Response): Promise<void> => {
  try {
    const { title, url } = req.body;
    await createNewVideo(title, url);
    res.status(201).json({ status: "success" });
  } catch (err) {
    errorResponse(err as CustomErrors, res);
  }
};
