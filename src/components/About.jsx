import React from 'react';
import '../styles/About.css';
import sobreImg from "../assets/eumelhor.png";
import { useInView } from '../hook/useInView'; // Ajuste o caminho se necessário

function About() {
  const [refTexto, visibleTexto] = useInView({ threshold: 0.3 });
  const [refImagem, visibleImagem] = useInView({ threshold: 0.3 });

  return (
    <section className="about" id="about">
      <h2 className="titulo-about">Sobre Mim</h2>
      <p className="subtitulo-about">Explorando os limites da tecnologia e inovação</p>

      <div className="about-content">
        <div
          ref={refTexto}
          className={`texto-about ${visibleTexto ? 'ativo' : ''}`}
        >
          <h3 className="azul">Minha Jornada Tech</h3>
          <p>
            Desenvolvedor apaixonado por tecnologias emergentes, com foco especial em
            <span className="azul"> Inteligência Artificial</span>,
            <span className="azul"> Blockchain</span> e
            <span className="roxo"> Computação Quântica</span>. Atualmente cursando Ciência da Computação e sempre em busca de desafios que empurrem os limites do que é possível.
          </p>
          <p>
            Especializado em desenvolvimento full-stack com experiência em arquiteturas distribuídas, microsserviços e sistemas de alta performance. Contribuo ativamente para projetos open-source e estou sempre explorando as mais recentes inovações tecnológicas.
          </p>

          <div className="cards-about">
            <div className="card"><h4>12+</h4><p>Projetos</p></div>
            <div className="card"><h4>4+</h4><p>Anos XP</p></div>
            <div className="card"><h4>5+</h4><p>Tecnologias</p></div>
          </div>
        </div>

        <div
          ref={refImagem}
          className={`imagem-about ${visibleImagem ? 'ativo' : ''}`}
        >
          <img src={sobreImg} alt="Sobre mim" />
        </div>
      </div>
    </section>
  );
}

export default About;
