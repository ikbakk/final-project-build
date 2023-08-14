"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDB = (url) => {
    mongoose_1.default.connect(url, { socketTimeoutMS: 10000 });
    const db = mongoose_1.default.connection;
    db.once('connected', () => {
        console.log('Connected to database');
    });
    db.on('error', error => {
        console.log(error);
    });
};
exports.connectToDB = connectToDB;
