import { Response } from "express";
import { searchVideosByTitle } from "../services/videos";
import { errorResponse } from "../utils/customResponses";
import { CustomErrors } from "../types/utils";
import { ProductReq, VideoReq } from "../types/controllers";
import { searchProductsByTitle } from "../services/products";

export const searchVideos = async (
  req: VideoReq,
  res: Response
): Promise<void> => {
  try {
    const { title } = req.query;
    const videos = await searchVideosByTitle(title);
    res.status(200).json({ status: "Success", data: videos });
  } catch (err) {
    errorResponse(err as CustomErrors, res);
  }
};

export const searchProducts = async (
  req: ProductReq,
  res: Response
): Promise<void> => {
  try {
    const { title } = req.query;
    const products = await searchProductsByTitle(title);
    res.status(200).json({ status: "Success", data: products });
  } catch (err) {
    console.log(err);
    errorResponse(err as CustomErrors, res);
  }
};
