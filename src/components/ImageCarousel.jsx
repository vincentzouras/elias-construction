import { useState } from "react";
import { useEffect } from "react";

import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [interactedWith, setInteractedWith] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    if (interactedWith) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [interactedWith, images.length]);

  return (
    <div className="relative md:max-w-3xl w-full mx-auto ">
      {/* image */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0 overflow-hidden rounded-lg">
              <img src={src} alt={`Slide ${index + 1}`} className="w-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* next */}
      <button
        onClick={() => {
          nextSlide();
          setInteractedWith(true);
        }}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        <img src={rightArrow} alt="" className="text-white" />
      </button>

      {/* previous */}
      <button
        onClick={() => {
          prevSlide();
          setInteractedWith(true);
        }}
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
