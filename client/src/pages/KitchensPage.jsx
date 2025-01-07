import ImageGallery from "../components/ImageGallery";
import FetchImage from "../hooks/FetchImage";
const KitchensPage = () => {
  return (
    <div className="kitchens-page mt-20">
      <div className="margin">
        <ImageGallery images={FetchImage("category", "new").slice(20, 40)} /> {/* placeholder */}
      </div>
    </div>
  );
};

export default KitchensPage;
