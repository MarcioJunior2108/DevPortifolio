import React from 'react';
import '../styles/Projects.css';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from '../hook/useInView'; // verifique se o caminho está correto

// Imagens dos projetos
import imgAi from "../assets/dashboardinfoproduto.png";
import imgBlockchain from "../assets/hellolysa.png";
import imgDashboard from "../assets/simuladordeenergiasolar.png";
import imgBiosite from "../assets/BioSiteJenifer.png";
import imgMusicPlay from "../assets/SiteMusicPlay.png";

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
  },
  {
    titulo: "Bio Site - Jenifer Henrique",
    descricao: "Bio Site para vendas de produtos com filtro de busca e redes sociais embutidas.",
    techs: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "EmailJS"],
    code: "",
    live: "https://loja-jenifer-henrique.vercel.app/",
    cor: "rosa",
    imagem: imgBiosite,
  },
  {
    titulo: "NeuraMusic",
    descricao: "Uma plataforma de streaming similar ao Spotify.",
    techs: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "EmailJS"],
    code: "",
    live: "https://playlist-music-sand.vercel.app/",
    cor: "verde",
    imagem: imgMusicPlay,
  }
];

function BtnLink({ href, className, children, ariaLabel }) {
  if (!href || href === '#') return null;
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

function Projetos() {
  const [ref, isVisible] = useInView({ threshold: 0.2 });

  return (
    <section
      className={`projetos ${isVisible ? 'ativo' : ''}`}
      id="projetos"
      ref={ref}
      aria-labelledby="titulo-projetos"
    >
      <h2 id="titulo-projetos" className="titulo-projetos">Projetos Inovadores</h2>
      <p className="subtitulo-projetos">Criando o futuro através de código e tecnologia</p>

      <div className="cards-projetos">
        {projetos.map((proj, index) => (
          <article
            key={`${proj.titulo}-${index}`}
            className={`card-projeto ${proj.cor} ${isVisible ? 'ativo' : ''}`}
            style={{ transitionDelay: `${index * 0.2}s` }}
          >
            <img
              src={proj.imagem}
              alt={`Prévia do projeto: ${proj.titulo}`}
              className="imagem-projeto"
              loading="lazy"
              decoding="async"
            />
            <div className="conteudo-projeto">
              <h4>{proj.titulo}</h4>
              <p>{proj.descricao}</p>
              <div className="tags-projeto" aria-label="Tecnologias utilizadas">
                {proj.techs.map((tech, i) => (
                  <span key={`${proj.titulo}-tech-${i}`}>{tech}</span>
                ))}
              </div>
              <div className="botoes-projeto">
                <BtnLink
                  href={proj.code}
                  className="btn-proj"
                  ariaLabel={`Abrir código de ${proj.titulo} em uma nova aba`}
                >
                  <FaCode /> Code
                </BtnLink>
                <BtnLink
                  href={proj.live}
                  className="btn-proj azul"
                  ariaLabel={`Abrir versão ao vivo de ${proj.titulo} em uma nova aba`}
                >
                  <FaExternalLinkAlt /> Live
                </BtnLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
