import React from "react";
import Card from "../components/card";

const Proyectos = () => {
  const proyectos = [
    {
      image: "../src/assets/img/pixel-art-moon.jpg",
      title: "Proyecto 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Proyecto 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },
    {
      image_url: "https://via.placeholder.com/150",
      title: "Proyecto 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
    },
  ];

  return (
    <section id="projects">
      <h2>Proyectos</h2>
      <div className="cards-container">
        {proyectos.map((proyecto, index) => (
          <Card
            key={index}
            image={proyecto.image}
            title={proyecto.title}
            description={proyecto.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
