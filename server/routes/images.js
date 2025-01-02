import express from "express";
import { uploadImage } from "../controllers/imagesController.js";
import multer from "multer";

const router = express.Router();

// store files in memory as buffers
const storage = multer.memoryStorage({ destination: (req, file, cb) => cb(null, "") });

// filter to only allow images
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/webp") {
    cb(null, true); // allow
  } else {
    cb(null, false); // reject
    console.log("didnt pass filter: " + file);
  }
};

// multer setup for file uploads
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.post("/", upload.single("image"), uploadImage);

export default router;
