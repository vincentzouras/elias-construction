import logoremodel from "/logoremodel.svg";
import ImageCarousel from "../components/ImageCarousel";
import backgroundImage from "/background.jpg";
import FetchImage from "../hooks/FetchImage";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* opening screen */}
      <div className="min-h-screen mx-auto px-4 flex flex-col items-center justify-center">
        <img src={logoremodel} alt="Elias Construction" className="h-32 sm:h-60" />
      </div>
      {/* highlights */}
      <div className="mt-10">
        <ImageCarousel images={FetchImage("category", "about")} />
      </div>
      {/* quality matters */}
      <div className="margin my-20">
        <p className="text-4xl font-bold mt-10 text-center">Quality and honesty are at the heart of everything we do</p>
        <p className="text-center max-w-4xl mx-auto mt-9 text-lg">
          Elias Construction is a Elias Construction is a professional residential contractor and builder with 26+ years
          of experience in remodeling, additions, and custom homes.
        </p>
        <p className="text-center max-w-4xl mx-auto my-9 text-lg">
          We service West Chester, Downingtown, Malvern, Exton, Chester Springs, Newtown Square, Edgemont, Media, Eagle,
          Wayne, Radnor, Lower Merion, Villanova, and all other cities in Chester County and Delaware County
          Pennsylvania.
        </p>
      </div>
      {/* what we do */}
      <div className="relative text-white">
        <div className="h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="flex flex-col md:flex-row h-full bg-eliasBlue-900 bg-opacity-80">
            <div className=" flex-1 flex items-center justify-center">
              <div className=" max-w-xl flex flex-col gap-3 md:gap-5 ">
                <p className="text-4xl font-bold">What we do</p>
                <hr className="border-gray-300" />
                <p>Basement finishing / remodeling</p>
                <hr className="border-gray-300" />
                <p>Home additions / improvements</p>
                <hr className="border-gray-300" />
                <p>Kitchen finishing / renovations</p>
                <hr className="border-gray-300" />
                <p>Bathroom remodeling / renovations</p>
                <hr className="border-gray-300" />
                <p>Custom homes</p>
                <hr className="border-gray-300" />
                <p>Custom built-ins, molding, and much more!</p>
                <hr className="border-gray-300" />
              </div>
            </div>
            <div className=" flex-1 flex justify-center items-center flex-col">
              <div className="mb-20 md:mb-0 text-center justify-center max-w-2xl">
                <div className="text-4xl font-bold max-w-lg">Design and build your dream today!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about us */}
      <div className="margin h-screen"></div>
      {/* featured work */}
      <div className="margin"></div>
    </div>
  );
};

export default AboutPage;
