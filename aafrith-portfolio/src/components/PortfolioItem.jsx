import { useState } from 'react'; 
import PropTypes from 'prop-types';     
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        {/* Display the title in the hover section */}
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modal && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            {/* Close button */}
            <svg
              src={Close}
              className="modal__close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              onClick={toggleModal}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>

            {/* Modal title */}
            <h3 className="modal__title">{title}</h3>

            {/* Details list */}
            <ul className="modal__list grid">
              {details.map(({ icon, title, desc }, index) => (
                <li className="modal__item" key={index}>
                  {/* Icon */}
                  <span className="item__icon">{icon}</span>
                  {/* Title and description */}
                  <div>
                    <span className="item__title">{title}</span>
                    {title === 'Preview : ' ? (
                      <a 
                        href={desc} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="item__details"
                        style={{ color: 'blue', textDecoration: 'underline' }} // Make the link more visible
                      >
                        {desc}
                      </a>
                    ) : (
                      <span className="item__details">{desc}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Image in modal */}
            
            <img src={img} alt={title} className="modal__img" />
    
          </div>
        </div>
      )}
    </div>
  );
};

// Add PropTypes validation
PortfolioItem.propTypes = {
  img: PropTypes.string.isRequired,    
  title: PropTypes.string.isRequired,  
  details: PropTypes.arrayOf(          
    PropTypes.shape({
      icon: PropTypes.element,         
      title: PropTypes.string.isRequired,  
      desc: PropTypes.string.isRequired,   
    })
  ).isRequired,
};

export default PortfolioItem;
