import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Ferme le menu mobile
  };

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse" onClick={handleLinkClick}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/logosolanight.png`}
            className="h-10 w-auto"
            alt="Logo Solanight"
          />
          <span className="self-center text-2xl font-semibold text-white">Solanight</span>
        </Link>

        <div className="flex md:order-2 items-center space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/contact" onClick={handleLinkClick}>
            <button
              type="button"
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:focus:ring-red-800 transition"
            >
              Me contacter
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-800 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black">
            <li>
              <Link to="/" className="block py-2 px-3 text-white hover:text-red-500" onClick={handleLinkClick}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/piano" className="block py-2 px-3 text-white hover:text-red-500" onClick={handleLinkClick}>
                Piano
              </Link>
            </li>
            <li>
              <Link to="/mannequinat" className="block py-2 px-3 text-white hover:text-red-500" onClick={handleLinkClick}>
                Mannequinat
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-white hover:text-red-500" onClick={handleLinkClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
