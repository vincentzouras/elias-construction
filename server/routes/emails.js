import express from "express";
import { sendEmail } from "../controllers/emailsController.js";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage(); // store files in memory
const upload = multer({ storage });

// POST for sending email
router.post("/", upload.none(), sendEmail);

export default router;
