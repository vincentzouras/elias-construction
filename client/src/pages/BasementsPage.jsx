import ImageGallery from "../components/ImageGallery";
import FetchImage from "../hooks/FetchImage";
const BasementsPage = () => {
  return (
    <div className="basements-page mt-20">
      <div className="margin">
        <ImageGallery images={FetchImage("category", "new").slice(0, 20)} /> {/* placeholder */}
      </div>
    </div>
  );
};

export default BasementsPage;
