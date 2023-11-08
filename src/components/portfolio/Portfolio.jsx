import "./portfolio.css";

import IMG1 from "../../assets/adea.png";
import IMG2 from "../../assets/buta-grup.png";
import IMG3 from "../../assets/bayburt.png";
import IMG4 from "../../assets/gardas-komeyi.png";
import IMG5 from "../../assets/nft.png";
import IMG6 from "../../assets/baysav.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Azərbaycan Respublikasının Dövlət Ehtiyatlar Agentliyi",
      img: IMG1,
      description: "",
      technologies: "Html | CSS | Bootstrap | Javascript",
      link: "https://dea.gov.az/az",
      github: "#",
    },
    {
      id: 2,
      title: "Buta Grup",
      img: IMG2,
      description: "",
      technologies: "Html | CSS | Bootstrap | Javascript",
      link: "https://www.butagrup.com.tr/",
      github: "#",
    },
    {
      id: 3,
      title: "Bayburt Grup",
      img: IMG3,
      description: "",
      technologies: "Html | CSS | Bootstrap | Javascript",
      link: "https://bayburt-grup.netlify.app/",
      github: "#",
    },
    {
      id: 4,
      title: "Bayburt Savunma",
      img: IMG6,
      description: "",
      technologies: "Html | CSS | Bootstrap | Javascript",
      link: "https://www.baysav.com/",
      github: "#",
    },
    {
      id: 4,
      title: "Qardaş Köməyi platforması",
      img: IMG4,
      description: "",
      technologies: "Html | CSS | Bootstrap | Javascript",
      link: "https://gardaskomeyi.org/",
      github: "#",
    },
    {
      id: 5,
      title: "NFT Marketplace",
      img: IMG5,
      description: "",
      technologies: "Html | CSS | Bootstrap | Javascript",
      link: "https://nft-marketplace-amber-eta.vercel.app/",
      github: "#",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
