import React, { useEffect, useRef } from 'react';
import MusicParticles from './MusicParticles';

function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const text = "Artiste. Pianiste. Créatif. Mannequin.";
    let index = 0;
    let direction = 1;
    const interval = setInterval(() => {
      if (typedRef.current) {
        typedRef.current.textContent = text.substring(0, index);
        if (direction === 1) {
          index++;
          if (index > text.length) direction = -1;
        } else {
          index--;
          if (index === 0) direction = 1;
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative bg-black text-white py-20 px-6 md:px-12 overflow-hidden min-h-screen">
      {/* Particules musicales */}
      <div className="absolute inset-0 h-full w-full z-0 pointer-events-none">
        <MusicParticles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texte à gauche */}
        <div className="flex-1 text-center md:text-left space-y-6 font-lora">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Je suis <span className="text-red-600">Solanight</span>
          </h1>
          <h2 ref={typedRef} className="text-lg md:text-xl text-red-400 font-mono h-6" />

          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 relative italic">
            <span className="text-red-600 text-5xl absolute -left-6 -top-6 select-none">“</span>
            <span>
              Depuis mes 6 ans, je dialogue avec les touches d’un piano.  
              Dans les gares, au cœur du tumulte, je joue pour toucher l’instant.  
              Chaque note est une émotion, chaque silence une intention.  
              Solanight, c’est une vision, une sensation, un univers.
            </span>
            <span className="text-black text-5xl absolute -right-6 -bottom-6 select-none">”</span>
          </p>

          <div className="flex items-center justify-center md:justify-start space-x-6 mt-8">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-2.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
              <svg className="w-7 h-7 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.75 2a5.24 5.24 0 0 0 4.25 2V7.5a8.75 8.75 0 0 1-4.25-1.17v8.17c0 3.03-2.45 5.5-5.5 5.5S5.75 17.53 5.75 14.5 8.2 9 11.25 9c.49 0 .96.07 1.41.2V11a3.75 3.75 0 1 0 1.5 2.97V2h2.59z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Vidéo à droite dans un style TikTok */}
        <div className="flex-1 w-full max-w-xs md:max-w-sm aspect-[9/16] bg-black border border-white/10 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(255,255,255,0.1)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/Bohemian.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero;
