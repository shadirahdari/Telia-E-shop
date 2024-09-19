import "./style.css";
import PropTypes from "prop-types"; // Import PropTypes

export const Text = ({ text = ""}) => {
  return <div className="es-text">{text}</div>;
};

Text.propTypes = {
  text: PropTypes.string.isRequired,
};
