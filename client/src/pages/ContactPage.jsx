import ContactForm from "../components/ContactForm";
import mailIcon from "/icons/mail.svg";
import locationIcon from "/icons/location.svg";
import phoneIcon from "/icons/phone.svg";

const ContactPage = () => {
  return (
    <>
      <div className="contact-page  min-h-screen margin flex md:flex-row flex-col mt-16 md:mt-0">
        <div className="flex-1 flex md:items-start items-center justify-center flex-col text-gray-700 gap-2">
          <h1 className="font-bold text-4xl mb-2">Contact Us</h1>
          <div className="flex gap-4 md:text-base text-sm">
            <img src={locationIcon} alt="Location" />
            <p>1436 Telegraph Road, West Chester PA 19380</p>
          </div>
          <div className="flex gap-4">
            <img src={mailIcon} alt="Mail" />
            <a href="mailto:eliaszouras@gmail.com">eliaszouras@gmail.com</a>
          </div>
          <div className="flex gap-4">
            <img src={phoneIcon} alt="Phone" />
            <p>+1 610-656-9955</p>
          </div>
        </div>
        <div className="flex-1 my-auto">
          <ContactForm />
        </div>
      </div>
      <Map />
    </>
  );
};

const Map = () => {
  return (
    <div className="margin ">
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=${
          import.meta.env.VITE_MAPS_API_KEY
        }&q=1436+Telegraph+Road,West+Chester,PA+19380&zoom=12`}
        height={500}
        style={{ border: 0 }}
        loading="lazy"
        className="w-full rounded-lg"
      ></iframe>
    </div>
  );
};

export default ContactPage;
