import express from "express";
import { uploadImage } from "../controllers/imagesController.js";

const router = express.Router();

router.post("/upload", uploadImage);

export default router;
