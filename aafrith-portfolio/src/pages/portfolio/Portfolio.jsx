import { portfolio } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio__scale-container">
        {" "}
        {/* New container for scaling */}
        <div className="portfolio__container container grid">
          {portfolio.map((item) => {
            return <PortfolioItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
