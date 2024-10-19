import PropTypes from 'prop-types';

const ThemeItem = ({ color, img, changeColor }) => {
  return (
    <img
      src={img}
      alt=""
      className="theme__img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};

// Define prop types for the component
ThemeItem.propTypes = {
  color: PropTypes.string.isRequired,        // Color should be a string
  img: PropTypes.string.isRequired,          // img should be a string (URL for image)
  changeColor: PropTypes.func.isRequired,    // changeColor should be a function
};

export default ThemeItem;
