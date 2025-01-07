/*
One time use for populating database with photos
*/

import fs from "fs";
import path from "path";
import axios from "axios";
import FormData from "form-data";

// Configuration
const folderPath = "C:/Users/vince/Desktop/images";
const apiUrl = "http://localhost:5000/api/images";
const apiKey = "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE";

const uploadImage = async (filePath) => {
  try {
    const form = new FormData();
    const fileName = path.basename(filePath);

    // Add the image file
    form.append("image", fs.createReadStream(filePath));
    form.append("category", "new");
    form.append("name", fileName);

    const headers = {
      ...form.getHeaders(),
      "x-api-key": apiKey,
    };

    const response = await axios.post(apiUrl, form, { headers });
    console.log(`Uploaded: ${filePath} - Status: ${response.status}`);
  } catch (error) {
    console.error(`Failed to upload: ${filePath} - Error: ${error.message}`);
  }
};

const uploadFolder = async (folderPath) => {
  try {
    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      const filePath = path.join(folderPath, file);

      // Ensure it's a file and has an image extension
      if (fs.statSync(filePath).isFile() && /\.(jpg|jpeg|webp)$/i.test(file)) {
        console.log(`Uploading: ${filePath}`);
        await uploadImage(filePath);
      } else {
        console.log(`Skipping: ${filePath} (not a valid image)`);
      }
    }

    console.log("All files uploaded successfully!");
  } catch (error) {
    console.error(`Error processing folder: ${error.message}`);
  }
};

uploadFolder(folderPath);
