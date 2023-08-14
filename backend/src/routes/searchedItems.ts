import { Router } from "express";
import { searchProducts, searchVideos } from "../controllers/searchedItems";

const searchRouter = Router();

searchRouter.get("/videos", searchVideos);
searchRouter.get("/products", searchProducts);

export default searchRouter;
