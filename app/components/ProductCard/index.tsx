import { Button } from "../Button";
import { MonthlyPayment } from "../MonthlyPayment";
import { StockStatus } from "../StockStatus";
import { CardImage } from "../Img";
import { ColorDots } from "../ColorDots";
import { OverLine } from "../OverLine";
import { Text } from "../Text";
import "./style.css";

export const ProductCard = ({}) => {
  return (
    <div className="es-product-card">
      

      <div  className="es-product-card-main">
      <div className="es-product-card-top">
        
        <div className="es-product-card-top-left">
          <CardImage />
          </div>
          <div className="es-product-card-top-right">
            <OverLine company={"APPLE"} title={"iphone 15"} />
            <ColorDots />
          </div>
        </div>
        <div> <Text /></div>
        
        <div className="es-price-botton"> <MonthlyPayment price={29} />
        <Button label="Order now ->" />
        </div>
      </div>
     
      <StockStatus in_stock={true} />
      {/* <StockStatus in_stock={false} /> */}

    </div>
  );
};
