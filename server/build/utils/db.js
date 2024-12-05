"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const dbUrl = process.env.DB_URL || '';
const connectDb = async () => {
    try {
        await mongoose_1.default.connect(dbUrl).then((data) => {
            console.log(`Connected to MongoDB: ${data.connection.host}`);
        });
    }
    catch (error) {
        console.log(error);
        setTimeout(connectDb, 5000);
    }
};
exports.default = connectDb;
