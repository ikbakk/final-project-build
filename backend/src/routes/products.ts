import { Router } from "express";
import { addProduct, getProducts } from "../controllers/products";

const productsRouter = Router();

productsRouter.get("/:videoID", getProducts);
productsRouter.post("/:videoID", addProduct);

export default productsRouter;
