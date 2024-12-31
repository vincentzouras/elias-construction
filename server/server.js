import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import imageRoutes from "./routes/images.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/images", imageRoutes);

const port = process.env.PORT || 5000;

connectDB();

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
