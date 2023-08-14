"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
const environmentCheck = () => {
    if (process.env.NODE_ENV === "production") {
        return {
            port: parseInt(process.env.PORT),
            databaseUrl: process.env.DATABASE_URL,
        };
    }
    else {
        return {
            port: 3000,
            databaseUrl: "mongodb://127.0.0.1:27017/tokopakediPlay",
        };
    }
};
exports.config = environmentCheck();
