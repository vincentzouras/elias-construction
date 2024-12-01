import { useState } from "react";

import leftArrow from "../../public/leftArrow.svg";
import rightArrow from "../../public/rightArrow.svg";

import image1 from "../assets/images/additionslide1.webp";
import image2 from "../assets/images/additionslide2.webp";
import image3 from "../assets/images/additionslide3.webp";

const ImageCarousel = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* image */}
      <div className="overflow-hidden rounded-lg">
        <img src={images[currentIndex]} alt={"Slide ${currentIndex + 1}"} className="object-cover w-full" />
      </div>

      {/* next */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <img src={rightArrow} alt="" className="text-white" />
      </button>

      {/* previous */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <img src={leftArrow} alt="" />
      </button>

      {/* dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((item, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-eliasOrange-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
