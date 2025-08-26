"use client";
import { type ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "next-themes";

const ParticleBg = () => {
  const [init, setInit] = useState(false);

  const { theme } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [theme]);

  //   const particlesLoaded = async (container?: Container): Promise<void> => {
  //     console.log(container);
  //   };

  const options: ISourceOptions = {
    key: "absorbers",
    name: "Absorbers",
    particles: {
      number: {
        value: 300,
      },
      collisions: {
        enable: true,
      },
      color: {
        value:
          theme === "dark" ? "#ffffff" : theme === "light" ? "#000000" : "",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
      },
      size: {
        value: {
          min: 1,
          max: 2,
        },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "top",
        straight: true,
        warp: true,
      },
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          quantity: 10,
        },
      },
    },
    absorbers: {
      draggable: true,
      size: {
        value: {
          min: 5,
          max: 10,
        },
        limit: 10,
      },
      position: {
        x: 50,
        y: 50,
      },
    },
    // background: {
    //   color: ,
    // },
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        // particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 -z-50"
      />
    );
  }

  return <></>;
};
export default ParticleBg;
