import React from 'react';
import { FaEnvelope, FaInstagram, FaTiktok } from 'react-icons/fa';

function Contact() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20 md:px-24">
      <div className="text-center mt-28 mb-12">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
          style={{ textShadow: '1px 1px 5px rgba(255, 255, 255, 0.15)' }}
        >
          📩 Me Contacter
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Pour une collaboration artistique, un shooting, ou toute autre idée, n’hésitez pas à me joindre.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <a
          href="mailto:solanight@email.com"
          className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition text-white flex items-center gap-3"
        >
          <FaEnvelope /> solanight@email.com
        </a>

        <a
          href="https://www.instagram.com/_solanight"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 px-6 py-3 rounded-lg shadow hover:shadow-red-500/40 transition hover:scale-105 flex items-center gap-3"
        >
          <FaInstagram className="text-pink-500" /> @_solanight
        </a>

        <a
          href="https://www.tiktok.com/@solanight_"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 px-6 py-3 rounded-lg shadow hover:shadow-red-500/40 transition hover:scale-105 flex items-center gap-3"
        >
          <FaTiktok className="text-white" /> @solanight_
        </a>
      </div>

      <div className="mt-16 text-center text-sm text-gray-500 italic">
        Disponible pour projets artistiques, marques, vidéos ou shootings.
      </div>
    </section>
  );
}

export default Contact;
