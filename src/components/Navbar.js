import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/assets/logosolanight.png" className="h-10 w-auto" alt="Logo Solanight" />
          <span className="self-center text-2xl font-semibold text-white">Solanight</span>
        </Link>

        {/* Bouton Me contacter + Hamburger */}
        <div className="flex md:order-2 items-center gap-4">
          <Link to="/contact">
            <button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 transition">
              Me contacter
            </button>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile + desktop */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 bg-black md:bg-transparent border border-gray-800 md:border-0 rounded-lg font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-white hover:text-red-500">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/piano" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-white hover:text-red-500">
                Piano
              </Link>
            </li>
            <li>
              <Link to="/mannequinat" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-white hover:text-red-500">
                Mannequinat
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="block py-2 px-3 text-white hover:text-red-500">
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
