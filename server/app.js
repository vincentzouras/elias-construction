import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import imageRoutes from "./routes/images.js";
import emailRoutes from "./routes/emails.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/images", imageRoutes);
app.use("/api/email", emailRoutes);

connectDB();

export default app;
