import { Link } from "react-router-dom";
import logo from "/logo.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <header className="bg-white w-full z-50 fixed">
      <nav className="max-w-screen-xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <img src={logo} alt="Elias Construction" className="h-10 md:h-12 lg:h-14" />
          <img className="block md:hidden" src={menu} />
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/*TODO separate navigation for mobile (hence hidden by default) */}
            <Link to="/" className="text-gray-900 hover:bg-gray-200 transition duration-300 rounded-md px-4 py-2">
              About
            </Link>
            <Link
              to="/basements"
              className="text-gray-900 hover:bg-gray-200 transition duration-300 rounded-md px-4 py-2"
            >
              Basements
            </Link>
            <Link
              to="/kitchens"
              className="text-gray-900 hover:bg-gray-200 transition duration-300 rounded-md px-4 py-2"
            >
              Kitchens
            </Link>
            <Link
              to="/bathrooms"
              className="text-gray-900 hover:bg-gray-200 transition duration-300 rounded-md px-4 py-2"
            >
              Bathrooms
            </Link>
            <Link to="/contact">
              <button className="hover:bg-eliasOrange-500 rounded-md px-4 py-2 bg-eliasBlue-500 hover:text-gray-900 text-white transition duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
