import Year from "../year/year";

const Footer = () => {
  return (
    <section>
      <div className="text-center py-6 bg-gray-200">
        <h1 className="text-gray-700">
          ©Copyright <Year />
        </h1>
      </div>
    </section>
  );
};

export default Footer;
