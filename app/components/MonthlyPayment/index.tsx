import "./style.css";

export const MonthlyPayment = ({price=0 }) => {
  return <div className="es-monthly-payment">{price} Eur/Month</div>;
}
