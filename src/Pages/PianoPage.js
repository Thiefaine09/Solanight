import React from 'react';
import PianoPreview from '../components/PianoPreview';
import MusicParticles from '../components/MusicParticles';

function PianoPage() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden text-white">
      {/* Particules musicales */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <MusicParticles />
      </div>

      {/* Contenu principal */}
      <section className="relative z-10 px-6 py-24 md:px-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            🎹 Mon Univers
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Quelques-uns de mes meilleurs moments piano partagés sur TikTok.
          </p>
        </div>


        {/* Galerie TikTok */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <PianoPreview
            title="Bohemian Rhapsody"
            url="https://www.tiktok.com/@solanight_/video/7514997766880251158"
            thumbnail={`${process.env.PUBLIC_URL}/assets/Bohemian.png`}
          />
          <PianoPreview
            title="Master of Puppets"
            url="https://www.tiktok.com/@solanight_/video/7512069453404704022"
            thumbnail={`${process.env.PUBLIC_URL}/assets/master-of-puppets.webp`}
          />
          <PianoPreview
            title="Metallica Impro"
            url="https://www.tiktok.com/@solanight_/video/7522053467578354966"
            thumbnail={`${process.env.PUBLIC_URL}/assets/Metallica.jpg`}
          />
        </div>

        <div className="text-center mt-16 text-gray-400 italic">
          Plus de contenu sur{' '}
          <a
            href="https://www.tiktok.com/@solanight_"
            className="underline text-red-400 hover:text-red-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            mon TikTok
          </a>.
        </div>
      </section>
    </div>
  );
}

export default PianoPage;
