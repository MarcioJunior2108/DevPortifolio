import React from 'react';
import '../styles/Skills.css';
import { FaCode, FaDatabase, FaServer, FaBrain } from 'react-icons/fa';
import { useInView } from '../hook/useInView'; // ajuste o caminho se necessário

function Skills() {
  const [ref, visible] = useInView({ threshold: 0.2 });

  const categorias = [
    {
      titulo: "Frontend",
      icon: <FaCode />,
      cor: "azul",
      tecnologias: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      titulo: "Backend",
      icon: <FaDatabase />,
      cor: "roxo",
      tecnologias: ["Node.js", "Python", "Java", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
    },
    {
      titulo: "DevOps & Cloud",
      icon: <FaServer />,
      cor: "verde",
      tecnologias: ["Docker", "AWS", "Azure", "Kubernetes", "CI/CD", "Linux", "Git"]
    },
    {
      titulo: "AI & Machine Learning",
      icon: <FaBrain />,
      cor: "laranja",
      tecnologias: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI API", "Computer Vision", "NLP"]
    }
  ];

  return (
    <section className={`techstack ${visible ? 'ativo' : ''}`} id="habilidades" ref={ref}>
      <h2 className="titulo-tech">Tech Stack</h2>
      <p className="subtitulo-tech">Dominando tecnologias de ponta para soluções inovadoras</p>

      <div className="cards-tech">
        {categorias.map((cat, index) => (
          <div
            key={index}
            className={`card-tech ${visible ? 'ativo' : ''}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <div className={`icon-box ${cat.cor}`}>{cat.icon}</div>
            <h4>{cat.titulo}</h4>
            <div className="tags">
              {cat.tecnologias.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
