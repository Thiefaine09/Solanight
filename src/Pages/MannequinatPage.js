import React, { useState } from 'react';

const photos = [
  {
    src: '/assets/Shooting/prés_exterieur.jpg',
    alt: 'Portrait studio – 2024',
    category: 'Visage',
    label: 'Portrait studio – 2024',
  },
  {
    src: '/assets/Shooting/lunette_shooting_exterieur.jpg',
    alt: 'Look urbain – Paris',
    category: 'Look habillé',
    label: 'Look urbain – Paris',
  },
  {
    src: '/assets/Shooting/shooting_urbain.jpg',
    alt: 'Extérieur nature – 2025',
    category: 'Shooting extérieur',
    label: 'Extérieur nature – 2025',
  },
  {
    src: '/assets/Shooting/prés.jpg',
    alt: 'Expression faciale intense',
    category: 'Visage',
    label: 'Expression faciale intense',
  },
  {
    src: '/assets/Shooting/prés2.jpg',
    alt: 'Look habillé – Studio lumière',
    category: 'Visage',
    label: 'Look habillé – Studio lumière',
  },
  {
    src: '/assets/Shooting/prés2.jpg',
    alt: 'Look habillé – Studio lumière',
    category: 'Look habillé',
    label: 'Look habillé – Studio lumière',
  },
];

const categories = ['Tous', 'Visage', 'Look habillé', 'Shooting extérieur'];

function MannequinatPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredPhotos =
    selectedCategory === 'Tous'
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-24 md:px-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
          📸 Mannequinat & Expression Visuelle
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Entre regard, posture et émotion, chaque photo raconte une histoire.
        </p>
      </div>

      {/* Filtres dynamiques */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm transition ${
              selectedCategory === cat
                ? 'bg-red-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Galerie filtrée */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPhotos.map((photo, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg group transition-all duration-300"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-2 text-sm text-white">
              {photo.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 text-sm text-gray-500 italic">
        D'autres shootings à venir...
      </div>
    </section>
  );
}

export default MannequinatPage;
