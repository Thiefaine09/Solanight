import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function MusicParticles() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      className="w-full h-full"
      id="music-particles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 12 },
          size: { value: 28, random: true },
          move: { enable: true, speed: 0.3 },
          opacity: { value: 0.4 },
          shape: {
            type: "image",
            image: [
              {
                src: "/assets/note1.png",
                width: 32,
                height: 32
              },
              {
                src: "/assets/note2.png",
                width: 32,
                height: 32
              }
            ]
          }
        },
        detectRetina: true
      }}
    />
  );
}

export default MusicParticles;
