import { Product } from "../models";
import { ProductSchema } from "../types/models";
import { validateVideoId } from "./videos";
import { BadRequestError } from "../utils/customErrors";
import { NewProductAttribute } from "../types/services";

export const fetchProductByVideoId = async (
  videoID: string
): Promise<ProductSchema[]> => {
  await validateVideoId(videoID);
  const products = await Product.find({ videoID });
  return products;
};

export const createNewProduct = async ({
  title,
  price,
  urlProduct,
  videoID,
}: NewProductAttribute): Promise<void> => {
  if (!title || !price || !urlProduct || !videoID) {
    throw new BadRequestError("Missing required attributes");
  }

  await validateVideoId(videoID);
  const product = new Product({
    title,
    price,
    urlProduct,
    videoID,
  });
  await product.save();
};

export const searchProductsByTitle = async (
  title: string
): Promise<ProductSchema[]> => {
  if (!title) {
    throw new BadRequestError("Title is required");
  }

  const regex = new RegExp(title, "i");
  const products = await Product.find({ title: { $regex: regex } });
  return products;
};
