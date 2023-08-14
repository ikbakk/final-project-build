import path from "path";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "./utils/config";
import express, { Express } from "express";
import { connectToDB } from "./utils/dbConnect";
import { unknownEndpoint, requestLogger } from "./middlewares";
import {
  commentsRouter,
  productsRouter,
  searchRouter,
  videosRouter,
} from "./routes";

dotenv.config();
const app: Express = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./views")));

if (process.env.NODE_ENV === "development") {
  app.use(requestLogger);
}

app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "./views/index.html");
  res.sendFile(indexPath);
});

app.use("/api/comments", commentsRouter);
app.use("/api/products", productsRouter);
app.use("/api/videos", videosRouter);
app.use("/api/search", searchRouter);
app.use(unknownEndpoint);

connectToDB(config.databaseUrl);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
