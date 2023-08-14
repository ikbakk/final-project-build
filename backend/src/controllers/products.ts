import { Response } from "express";
import {
  createNewProduct,
  fetchProductByVideoId,
  searchProductsByTitle,
} from "../services/products";
import { CustomErrors } from "../types/utils";
import { errorResponse } from "../utils/customResponses";
import { ProductReq } from "../types/controllers";

export const getProducts = async (
  req: ProductReq,
  res: Response
): Promise<void> => {
  try {
    const { videoID } = req.params;
    const products = await fetchProductByVideoId(videoID);
    res.status(200).json({ status: "Success", data: products });
  } catch (err) {
    errorResponse(err as CustomErrors, res);
  }
};

export const addProduct = async (
  req: ProductReq,
  res: Response
): Promise<void> => {
  try {
    const { videoID } = req.params;
    const { title, price, urlProduct } = req.body;
    const requiredAttributes = {
      title,
      price,
      urlProduct,
      videoID,
    };
    await createNewProduct(requiredAttributes);
    res.status(201).json({ status: "Success" });
  } catch (err) {
    res.status(400).json({ status: "Failed" });
  }
};
