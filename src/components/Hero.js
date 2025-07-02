import React, { useEffect, useRef } from 'react';
import MusicParticles from './MusicParticles';
import './Hero.css'; // Important

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
      <div className="absolute inset-0 h-full w-full z-0 pointer-events-none">
        <MusicParticles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
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
        </div>

        {/* Vidéo avec halo lumineux animé */}
        <div className="flex-1 w-full max-w-xs md:max-w-sm relative">
          <div className="glow-border">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-[1rem] object-cover w-full h-full"
            >
              <source src={`${process.env.PUBLIC_URL}/assets/Bohemian.mp4`} type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
