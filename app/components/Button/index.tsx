import "./style.css";

export const Button = ({ label = "", onClick = () => {} }) => {
  return (
    <button className="es-button" onClick={onClick}>
      {label}
    </button>
  );
};
