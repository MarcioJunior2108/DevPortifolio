import React, { useRef, useState } from "react";
import "../styles/Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCogs,
  FaProjectDiagram,
  FaBrain,
  FaCodeBranch,
} from "react-icons/fa";
import emailjs from "emailjs-com";

function Contato() {
  const form = useRef();
  const [enviado, setEnviado] = useState(false);

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2h5lt7h", // ✅ Corrigido
        "template_4h1qw65",
        form.current,
        "fYnGK1CAAECxql8Xj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEnviado(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contato" id="contato">
      <h2 className="titulo-contato">Vamos Conectar</h2>
      <p className="subtitulo-contato">
        Pronto para colaborar em projetos inovadores e revolucionários
      </p>

      <div className="conteudo-contato">
        <div className="info-contato">
          <h4>Canais de Comunicação</h4>
          <div className="linha-contato">
            <FaEnvelope /> marciojunior.prowork@gmail.com
          </div>
          <div className="linha-contato">
            <FaLinkedin /> linkedin.com/in/m%C3%A1rcio-oliveira-a97a99343/
          </div>
          <div className="linha-contato">
            <FaGithub /> github.com/MarcioJunior2108
          </div>

          <h4>Especialidades</h4>
          <div className="especialidades">
            <span>
              <FaProjectDiagram /> Full-Stack
            </span>
            <span>
              <FaCodeBranch /> Blockchain
            </span>
            <span>
              <FaBrain /> AI/ML
            </span>
            <span>
              <FaCogs /> DevOps
            </span>
          </div>
        </div>

        <form ref={form} onSubmit={enviarEmail} className="formulario-contato">
          <input type="text" name="name" placeholder="Seu nome" required />
          <input
            type="email"
            name="email"
            placeholder="seu@email.com"
            required
          />
          <input
            type="text"
            name="project"
            placeholder="Tipo de projeto ou colaboração"
          />
          <textarea
            name="message"
            placeholder="Conte-me sobre sua ideia..."
            rows={4}
            required
          />
          <button type="submit">🚀 Iniciar Conexão</button>
          {enviado && (
            <p className="mensagem-sucesso">✅ Mensagem enviada com sucesso!</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contato;
