import React, { useEffect, useState } from "react";
import "../components/styles/header.css";
const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const windowResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", windowResize);
    return () => window.removeEventListener("resize", windowResize);
  }, []);

  return (
    <header>
      {!isMobile ? (
        <nav className="nav">
          <div className="logo">
            <img
              className="imglogo2"
              src="../src/assets/img/github-mark-white.png"
              alt="Logo"
            />
            <a href="https://github.com/Kidokatto">
              <img
                className="imglogo"
                src="../src/assets/img/pixel-art-moon.jpg"
                alt="Logo"
              />
            </a>
          </div>

          <ul className="nav_list">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#about-Me">Sobre mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#Habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="nav-toggleMenu">
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav_list2 ${menuOpen ? "open" : ""}`}>
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#about-Me">Sobre mí</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#Habilidades">Habilidades</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
