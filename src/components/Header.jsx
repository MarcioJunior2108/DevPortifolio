import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projetos', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <header className={`glass-header ${isOpen ? 'expanded' : ''}`}>
      <div className="header-container">
        <div className="logo">
          &lt; Dev<span className="highlight">Portifolio</span> /&gt;
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </div>

        <nav className="nav-menu">
          <a
            href="#hero"
            className={activeSection === 'hero' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Início
          </a>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Sobre
          </a>
          <a
            href="#projetos"
            className={activeSection === 'projetos' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Projetos
          </a>
          <a
            href="#contato"
            className={activeSection === 'contato' ? 'active' : ''}
            onClick={handleLinkClick}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
