import React, { useEffect, useState } from "react";
import "../components/styles/aboutMe.css";

const About = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 300); // Añade un pequeño retraso para asegurar que la transición se vea
    }, []);

    return (
        <div>
            <section className={`about ${loaded ? 'loaded' : ''}`} id="about-container">
                <div className="mi-descripcion-container">
                    <div className="img-container">
                        <img className="mi-foto" src="../src/assets/img/yo.jpg" alt="mi foto" />
                    </div>
                    <div className="description-container">
                        <h2 id="about-Me" className="name-h2">¡Hola Soy Juan!</h2>
                        <p className="description">
                            Soy un desarrollador web junior con mucho entusiasmo para emplear mis conocimientos en el area laboral, apasionado de la tecnología y enfocado a la superación personal. Soy un desarrollador orientado al frontend, disfruto crear interfaces interactivas y funcionales utilizando tecnologías como React y Js.
                            soy alguien muy curioso y me gusta aprender cosas nuevas, siempre estoy en constante aprendizaje y busco mejorar mis habilidades en el desarrollo web y compartirlas con mis compañeros de trabajo.
                        </p>
                        <div className="gato-container">
                            <img className="gato-frame" src="../src/assets/img/gatoPixelart.png" alt="" />
                        </div>

                    </div>
                </div>
            </section>
            <h2 className="title2">Mis Habilidades</h2>
            <div className="lista-container">
                <ul>
                    <li><img className="experience-logo" src="../src/assets/img/git-logo.png" alt="" /></li>
                    <li><img className="experience-logo" src="../src/assets/img/html-logo.png" alt="" /></li>
                    <li><img className="experience-logo" src="../src/assets/img/css-logo.png" alt="" /></li>
                    <li><img className="experience-logo" src="../src/assets/img/js-logo.png" alt="" /></li>
                    <li><img className="experience-logo" src="../src/assets/img/react-logo.png" alt="" /></li>
                </ul>
            </div>
        </div>


    )
}

export default About;
