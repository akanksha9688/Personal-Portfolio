import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { useTheme } from '../../context/ThemeContext';

const ParticleBackground = () => {
  const { isDark } = useTheme();
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: You can do something when particles are loaded
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: isDark ? '#000000' : '#ffffff',
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ['#00c5cb', '#9900cb'],
            },
            links: {
              color: isDark ? '#ffffff' : '#0f172a',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;