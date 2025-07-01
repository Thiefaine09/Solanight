import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + nom */}
        <div className="flex items-center space-x-3">
          <img src="/assets/logosolanight.png" alt="Solanight logo" className="h-10" />
          <span className="text-lg font-semibold text-white">Solanight</span>
        </div>

        {/* Liens rapides */}
        <div className="flex space-x-6 text-sm">
          <a href="#hero" className="hover:text-red-500 transition">Accueil</a>
          <a href="#piano" className="hover:text-red-500 transition">Piano</a>
          <a href="#mannequinat" className="hover:text-red-500 transition">Mannequinat</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} CodeCraft-Innovations. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
