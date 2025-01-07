import ImageGallery from "../components/ImageGallery";
import FetchImage from "../hooks/FetchImage";
const BathroomsPage = () => {
  return (
    <div className="bathrooms-page mt-20">
      <div className="margin">
        <ImageGallery images={FetchImage("category", "new").slice(60, 80)} /> {/* placeholder */}
      </div>
    </div>
  );
};

export default BathroomsPage;
