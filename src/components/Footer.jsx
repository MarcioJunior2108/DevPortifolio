import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4 className="footer-logo">&lt; Dev<span className="highlight">Portifolio</span> /&gt;</h4>
        <p>© {new Date().getFullYear()} Márcio Oliveira. Todos os direitos reservados.</p>
        
        <div className="footer-social">
          <a href="mailto:dev.portfolio@tech.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          <a href="https://github.com/dev-portfolio" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/dev-portfolio" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
