"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = require("./utils/config");
const express_1 = __importDefault(require("express"));
const dbConnect_1 = require("./utils/dbConnect");
const middlewares_1 = require("./middlewares");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../../frontend/dist")));
if (process.env.NODE_ENV === "development") {
    app.use(middlewares_1.requestLogger);
}
app.get("/", (req, res) => {
    const indexPath = path_1.default.join(__dirname, "../../frontend/dist/index.html");
    res.sendFile(indexPath);
});
app.use("/api/comments", routes_1.commentsRouter);
app.use("/api/products", routes_1.productsRouter);
app.use("/api/videos", routes_1.videosRouter);
app.use("/api/search", routes_1.searchRouter);
app.use(middlewares_1.unknownEndpoint);
(0, dbConnect_1.connectToDB)(config_1.config.databaseUrl);
app.listen(config_1.config.port, () => {
    console.log(`Server running on port ${config_1.config.port}`);
});
