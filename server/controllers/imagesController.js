import Image from "../models/Image.js";

export const uploadImage = async (req, res) => {
  const { name, imageUrl, category } = req.body;

  if (!image.name || !image.imageUrl || !image.category) {
    return res.status(400).json({ success: false, message: "not all fields entered" });
  }

  try {
    const newImage = new Image({ name, imageUrl, category });
    await newImage.save();
    res.status(201).json({ success: true, data: newImage });
  } catch (error) {
    console.error("error creating image: ", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};
