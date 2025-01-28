import React from "react";
import "../components/styles/header.css";
const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          
        <img className="imglogo2" src="../src/assets/img/github-mark-white.png" alt="Logo" />
          <a href="https://github.com/Kidokatto"><img className="imglogo" src="../src/assets/img/pixel-art-moon.jpg" alt="Logo" />
          </a>
          <h1 className="nick-name-github">Kidokatto</h1>
        </div>
      

        <ul className="nav_list">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mi</a>
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

    </header>
  );

}
export default Header