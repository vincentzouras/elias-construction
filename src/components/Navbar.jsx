import { Link } from "react-router-dom";
import eliasLogo from "/logo-navbar.svg";

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-screen-xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <img src={eliasLogo} alt="Elias Construction" className="h-10 md:h-12 lg:h-14" />
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/*TODO separate navigation for mobile (hence hidden by default) */}
            <Link
              to="/"
              className="text-gray-900 hover:text-gray-700 hover:bg-gray-200 transition duration-300 rounded px-2 py-1"
            >
              About
            </Link>
            <Link
              to="/basements"
              className="text-gray-900 hover:text-gray-700 hover:bg-gray-200 transition duration-300 rounded px-2 py-1"
            >
              Basements
            </Link>
            <Link
              to="/kitchens"
              className="text-gray-900 hover:text-gray-700 hover:bg-gray-200 transition duration-300 rounded px-2 py-1"
            >
              Kitchens
            </Link>
            <Link
              to="/bathrooms"
              className="text-gray-900 hover:text-gray-700 hover:bg-gray-200 transition duration-300 rounded px-2 py-1"
            >
              Bathrooms
            </Link>
            <Link to="/contact">
              <button className="bg-eliasOrange-500  rounded-full px-4 py-2 hover:bg-eliasBlue-500 hover:text-white text-center transition duration-300">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
