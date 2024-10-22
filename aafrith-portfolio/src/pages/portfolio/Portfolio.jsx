import { portfolio, certifications } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>

      {/* Projects Section */}
      <h3 className="section__subtitle1">Projects</h3>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>

      {/* Certifications Section */}
      <h3 className="section__subtitle2">Certifications</h3>
      <div className="portfolio__container container grid">
        {certifications.map((cert) => (
          <div className="portfolio__item" key={cert.id}>
            <img src={cert.img} alt={cert.title} className="portfolio__img" />
            <h3 className="portfolio__item-title">{cert.title}</h3>
            <div className="portfolio__hover">
              <h3 className="portfolio__title">{cert.title}</h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio__link"
              >
                View Certification
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
