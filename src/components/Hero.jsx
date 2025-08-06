import React from "react";
import "../styles/Hero.css";
import { FaLink, FaRocket } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from "react-type-animation";
import avatar from "../assets/eumelhor.png";
import { useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { FaChevronDown } from 'react-icons/fa'

function Hero() {
  useEffect(() => {
    const heroSection = document.querySelector(".hero");

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      heroSection.style.setProperty("--mouse-x", `${x}px`);
      heroSection.style.setProperty("--mouse-y", `${y}px`);
    };

    heroSection.addEventListener("mousemove", handleMouseMove);
    return () => heroSection.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="hero" id="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "transparent", // ⬅️ aqui está a correção
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#00cfff" },
            links: {
              enable: true,
              color: "#00cfff",
              distance: 150,
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.6,
              outModes: { default: "bounce" },
            },
            number: {
              value: 60,
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <img src={avatar} alt="Avatar" className="hero-img" />

      <h1 className="titulo">
        <TypeAnimation
          sequence={[
            "Desenvolvedor Front-End",
            2000,
            "Desenvolvedor Back-End",
            2000,
            "Desenvolvedor Full-Stack",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="gradiente"
        />
      </h1>

      <p className="descricao">
        Estudante de Ciência da Computação especializando em{" "}
        <span className="azul">IA</span>,{" "}
        <span className="azul">Blockchain</span> e{" "}
        <span className="roxo">Computação Quântica</span>
      </p>

      <div className="hero-buttons">
        <a href="#projetos" className="btn">
          <FaRocket /> Explorar Projetos
        </a>
        <a
          href="https://www.linkedin.com/in/m%C3%A1rcio-oliveira-a97a99343/"
          className="btn btn-outline"
          target="_blank"
          rel="noreferrer"
        >
          <FaLink /> Conectar
        </a>
      </div>
      {/* ...dentro do JSX... */}
      <div className="social-icons">
        <a
          href="https://github.com/MarcioJunior2108"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/seulinkedin"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a href="marciojunior.prowork@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      {/* ...dentro do JSX, abaixo de .social-icons */}
      <div className="scroll-indicator">
        <FaChevronDown />
      </div>
    </section>
  );
}

export default Hero;
