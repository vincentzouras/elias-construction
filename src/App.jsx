import eliasLogo from "/logo-navbar.svg";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header className="bg-white shadow">
        <nav className="max-w-screen-xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <img src={eliasLogo} alt="Elias Construction" className="h-10 md:h-12 lg:h-14" />
            <div className="hidden md:flex md:items-center md:space-x-8">
              <a
                href="#"
                className="text-gray-900 hover:text-gray-700 hover:bg-gray-200 transition duration-300 rounded px-2 py-1"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-700 hover:bg-gray-200 transition duration-300 rounded px-2 py-1"
              >
                Basements
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-700 hover:bg-gray-200 transition duration-300 rounded px-2 py-1"
              >
                Kitchens
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-gray-700 hover:bg-gray-200 transition duration-300 rounded px-2 py-1"
              >
                Bathrooms
              </a>
              <a href="#">
                <button className="bg-eliasOrange-500  rounded-full px-4 py-2 hover:bg-eliasBlue-500 hover:text-white text-center transition duration-300">
                  Contact
                </button>
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;
