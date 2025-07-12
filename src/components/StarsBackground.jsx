// src/components/StarsBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const StarsBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          particles: {
            number: { value: 100, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            size: { value: 1.5 },
            move: { enable: true, speed: 0.3 },
            links: {
              enable: true,
              color: "#ffffff",
              opacity: 0.2,
              distance: 120,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default StarsBackground;
