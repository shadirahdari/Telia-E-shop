import { Button } from "../Button";
import { MonthlyPayment } from "../MonthlyPayment";
import { StockStatus } from "../StockStatus";
import { CardImage } from "../Img";
import { ColorDots } from "../ColorDots";
import { OverLine } from "../OverLine";
import { Text } from "../Text";
import "./style.css";

export const ProductCard = ({ phone }) => {
  return (
    <div className="es-product-card">
      <div className="es-product-card-main">
        <div className="es-product-card-top">
          <div className="es-product-card-top-left">
            <CardImage />
          </div>
          <div className="es-product-card-top-right">
            <OverLine company={phone.company} title={phone.model} />
            <ColorDots />
          </div>
        </div>
        <div>
          {" "}
          <Text text={phone.description} />
        </div>

        <div className="es-price-botton">
          {" "}
          <MonthlyPayment price={Math.ceil(phone.price / 12)} />
          <Button label="Order now ->" />
        </div>
      </div>

      <StockStatus inStock={phone.stock > 0} />
      {/* <StockStatus in_stock={false} /> */}
    </div>
  );
};
