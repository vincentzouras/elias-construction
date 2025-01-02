import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String, // hold a link to AWS S3
      required: true,
    },
    category: {
      type: String, // to categorize what it is a picture of (kitchen, bathroom, etc)
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Image = mongoose.model("Image", imageSchema);

export default Image;
