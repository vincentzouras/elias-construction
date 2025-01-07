import { useState } from "react";
import closeButton from "/icons/closeButton.svg";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="flex justify-center items-center rounded-lg aspect-w-1 aspect-h-1">
            <img
              src={imageUrl}
              alt={`image-${index}`}
              className="object-cover rounded-lg shadow-lg hover:filter hover:grayscale transition duration-300 cursor-pointer"
              loading="lazy"
              draggable="false"
              onClick={() => openModal(imageUrl)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="relative bg-white rounded-lg shadow-lg max-w-full max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
            >
              <img src={closeButton} alt="" draggable="false" />
            </button>

            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen object-contain"
              draggable="false"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
