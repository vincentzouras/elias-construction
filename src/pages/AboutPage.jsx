import logoremodel from "/logoremodel.svg";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="min-h-screen mx-auto px-4 flex flex-col items-center justify-center">
        <img src={logoremodel} alt="Elias Construction" className="h-60" />
      </div>
      <div>
        <p className="text-lg margin">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum nobis sint totam ullam
          deserunt voluptas nam hic ducimus. Illo nam iusto laborum, sapiente consequuntur quasi dolorem sit ullam eius.
        </p>
        <p className="text-9xl margin">
          Lorem ipsum dolor sit amet consectetur adipisicing ssselit. Similique optio porro consectetur fugiat excepturi
          dicta animi illo repellat tempora possimus voluptas, incidunt magni maiores earum dignissimos quos! Nesciunt,
          qui numquam!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
