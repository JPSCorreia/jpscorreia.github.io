import React from 'react'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

  const particlesInit = async (main) => {
    await loadFull(main);
  };

const ParticleContainer = (props) => {
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={props.particlesLoaded}
      options={{
        background: {
          color: {
            value: '#121212',
          },
        },
        fullScreen: {
          zIndex: 1,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            onHover: {
              enable: true,
              mode: 'bubble',
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0,
              divs: {
                distance: 200,
                duration: 0.4,
                mix: false,
                selectors: [],
              },
            },
            grab: {
              distance: 400,
            },
            repulse: {
              distance: 400,
              divs: {
                distance: 200,
                duration: 0.4,
                factor: 100,
                speed: 1,
                maxSpeed: 50,
                easing: 'ease-out-quad',
                selectors: [],
              },
            },
          },
        },
        particles: {
          color: {
            value: '#67E8F9',
          },
          links: {
            color: {
              value: '#67E8F9',
            },
            distance: 150,
            opacity: 0.4,
          },
          move: {
            attract: {
              rotate: {
                x: 600,
                y: 600,
              },
            },
            enable: true,
            outModes: {
              bottom: 'out',
              left: 'out',
              right: 'out',
              top: 'out',
            },
            random: true,
            speed: 1,
          },
          number: {
            density: {
              enable: true,
            },
            value: 30,
          },
          opacity: {
            random: {
              enable: true,
            },
            value: {
              min: 0,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
            },
          },
          size: {
            random: {
              enable: true,
            },
            value: {
              min: 1,
              max: 3,
            },
            animation: {
              speed: 4,
              minimumValue: 0.3,
            },
          },
        },
      }}
    />
  );
};

export default ParticleContainer;