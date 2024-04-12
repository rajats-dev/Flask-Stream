import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./db/database.js";

// const app = express();
// const PORT = process.env.PORT;

dotenv.config({
  path: "./env",
});

connectDB();
