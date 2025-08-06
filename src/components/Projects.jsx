import React from 'react';
import '../styles/Projects.css';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from '../hook/useInView'; // certifique-se que o caminho esteja certo

// Imagens dos projetos
import imgAi from "../assets/dashboardinfoproduto.png";
import imgBlockchain from "../assets/hellolysa.png";
import imgDashboard from "../assets/simuladordeenergiasolar.png";

const projetos = [
  {
    titulo: "Dashboard de Infoprodutos",
    descricao:
      "Sistema completo para gestão de vendas e desempenho de produtos digitais. Visualize métricas em tempo real, integre com plataformas como Hotmart e monetize de forma inteligente.",
    techs: ["React", "Chart.js", "Node.js", "MongoDB", "JWT", "Supabase"],
    code: "https://github.com/MarcioJunior2108/DashboardInforHub",
    live: "https://dashboard-infor-hub.vercel.app/",
    cor: "roxo",
    imagem: imgAi,
  },
  {
    titulo: "Hello Lysa – Psicóloga Virtual (Privado)",
    descricao:
      "Aplicação SaaS baseada em IA para suporte emocional 24/7. A Lysa utiliza modelos de linguagem avançados para oferecer empatia, escuta ativa e orientações personalizadas com histórico de sessões e plano de bem-estar.",
    techs: ["React", "Node.js", "OpenAI", "Supabase", "Express", "Vercel"],
    code: "#",
    live: "#",
    cor: "rosa",
    imagem: imgBlockchain,
  },
  {
    titulo: "Simulador de Energia Solar",
    descricao:
      "Ferramenta interativa que calcula economia com energia solar. Ideal para empresas de instalação, o simulador oferece resultados em tempo real com base no consumo e localização do usuário.",
    techs: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "EmailJS"],
    code: "https://github.com/MarcioJunior2108/Calculadora-solar",
    live: "https://simulador-solar-lyart.vercel.app/",
    cor: "verde",
    imagem: imgDashboard,
  }
];

function Projetos() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      className={`projetos ${isVisible ? 'ativo' : ''}`}
      id="projetos"
      ref={ref}
    >
      <h2 className="titulo-projetos">Projetos Inovadores</h2>
      <p className="subtitulo-projetos">Criando o futuro através de código e tecnologia</p>

      <div className="cards-projetos">
        {projetos.map((proj, index) => (
          <div
            key={index}
            className={`card-projeto ${proj.cor} ${isVisible ? 'ativo' : ''}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <img src={proj.imagem} alt={proj.titulo} className="imagem-projeto" />
            <div className="conteudo-projeto">
              <h4>{proj.titulo}</h4>
              <p>{proj.descricao}</p>
              <div className="tags-projeto">
                {proj.techs.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="botoes-projeto">
                <a href={proj.code} className="btn-proj" target="_blank" rel="noreferrer">
                  <FaCode /> Code
                </a>
                <a href={proj.live} className="btn-proj azul" target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
