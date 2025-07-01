import React from 'react';

function PianoSection() {
  return (
    <section
      id="piano"
      className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Image de fond avec overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/assets/piano-bg.jpg')` }} // 👉 Ton image ici
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Présentation texte */}
        <div className="md:w-1/2 space-y-6 font-lora">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Piano.  
            <span className="block text-red-600">Ma voix intérieure.</span>
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Depuis l’âge de 6 ans, je dialogue avec les touches du piano.  
            Dans les gares, dans les rues, je joue pour faire ressentir  
            ce que les mots ne peuvent exprimer. Chaque note est une émotion,  
            chaque silence est une respiration.
          </p>

          <p className="text-gray-400 text-sm">
            Chaque performance est unique, sincère, offerte à l’instant.
          </p>
        </div>

        {/* Vidéo YouTube ou MP4 */}
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full aspect-video rounded-lg"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Performance piano"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* OU utilise ce bloc pour un fichier MP4 :
          <video controls className="w-full h-auto object-cover rounded-lg">
            <source src="/assets/Bohemian.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la vidéo.
          </video>
          */}
        </div>
      </div>
    </section>
  );
}

export default PianoSection;
