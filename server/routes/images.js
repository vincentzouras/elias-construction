import express from "express";
import Image from "../models/images.model";

const router = express.Router();

router.post("/upload", async (req, res) => {
  const image = req.body;

  if (!image.name || !image.data || !image.category) {
    return res.status(400).json({ success: false, message: "not all fields entered" });
  }

  const newImage = new Image(image);

  try {
    await newImage.save();
    res.status(201).json({ success: true, data: newImage });
  } catch (error) {
    console.error("error creating image: ", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
});

export default router;
