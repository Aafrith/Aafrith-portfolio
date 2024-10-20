import PropTypes from "prop-types";
import parse from "html-react-parser";

const ResumeItem = ({ icon, year, title, desc }) => {
  return (
    <div className="resume__item">
      <div className="resume__icon">{icon}</div>

      <span className="resume__date">{year}</span>
      <h3 className="resume__subtitle">{parse(title)}</h3>
      <p className="resume__description">{desc}</p>
    </div>
  );
};

// Define the prop types
ResumeItem.propTypes = {
  icon: PropTypes.element.isRequired, // Ensures icon is a React element
  year: PropTypes.string.isRequired, // Ensures year is a string
  title: PropTypes.string.isRequired, // Ensures title is a string
  desc: PropTypes.string.isRequired, // Ensures desc is a string
};

export default ResumeItem;
