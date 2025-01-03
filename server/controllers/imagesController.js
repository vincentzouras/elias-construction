import Image from "../models/Image.js";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import path from "path";

export const uploadImage = async (req, res) => {
  try {
    const fileExtension = path.extname(req.file.originalname);

    const uniqueFileName = `${crypto.randomUUID()}${fileExtension}`;

    // create instance of s3 with stored variables (s3 cloud storage)
    const s3 = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET,
      },
    });

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: uniqueFileName,
      Body: req.file.buffer,
    };

    const command = new PutObjectCommand(params);
    const response = await s3.send(command);

    console.log(response);

    const image = new Image({
      name: req.body.name,
      imageUrl: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${uniqueFileName}`,
      category: req.body.category,
    });

    const result = await image.save();

    res.status(200).send({
      _id: result._id,
      name: result.name,
      imageUrl: image.imageUrl,
      category: result.category,
    });
  } catch (error) {
    console.error("Error uploading image:", error.message);
    res.status(500).send({ error: error.message });
  }
};

export const getImageByName = async (req, res) => {
  try {
    const name = req.params.name;
    const image = await Image.findOne({ name: name });
    res.status(200).json(image);
  } catch (error) {
    console.error("error getting image by name: " + error.message);
    res.status(500).send({ error: error.message });
  }
};

export const getImagesByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const images = await Image.find({ category: category });
    res.status(200).json(images);
  } catch (error) {
    console.error("error getting images by category: " + error.message);
    res.status(500).send({ error: error.message });
  }
};
