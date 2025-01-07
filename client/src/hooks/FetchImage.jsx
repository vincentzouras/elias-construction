import { useState, useEffect } from "react";
import axios from "axios";

const FetchImage = (fetchType, query) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiEndpoint = import.meta.env.VITE_BACKEND_API_URL;
        const response = await axios.get(`${apiEndpoint}/images/${fetchType}/${query}`);

        if (fetchType === "category") {
          setImages(response.data.map((item) => item.imageUrl));
        } else if (fetchType === "name") {
          setImages([response.data.imageUrl]);
        } else {
          throw new Error("Invalid fetchType");
        }
      } catch (error) {
        console.error("Error fetching images:", error.message);
        setImages([]);
      }
    };

    fetchData();
  }, [fetchType, query]);

  return images;
};

export default FetchImage;
