import { useState } from "react";

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
    <div className="">
      {/* image */}
      <div className="">
        <img src={images[currentIndex]} alt={"Slide "} />
      </div>

      {/* next */}
      <button onClick={nextSlide}>next</button>

      {/* previous */}
      <button onClick={prevSlide}>prev</button>

      {/* dots */}
      <div>
        {images.map((item, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className="" />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
