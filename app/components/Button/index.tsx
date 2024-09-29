import "./style.css";

export const Button = ({ label = "", children = [], onClick = () => {} }) => {
  return (
    <button className="es-button" onClick={onClick}>
      {label}
      {children}
    </button>
  );
};
