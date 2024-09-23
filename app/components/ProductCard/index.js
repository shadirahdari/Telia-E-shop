"use client"; // You must add this for client components

// import { useRouter } from "next/navigation";

import { Button } from "../Button";
import { MonthlyPayment } from "../MonthlyPayment";
import { StockStatus } from "../StockStatus";
import { CardImage } from "../Img";
import { ColorDots } from "../ColorDots";
import { OverLine } from "../OverLine";
import { Text } from "../Text";
import "./style.css";
import axios from "axios";

export const ProductCard = ({ phone }) => {
  // const router = useRouter();

  const handleAddToCard = () => {
    axios
      .post("/api/add-to-cart", { phoneId: phone.id })
      .then((response) => {
        console.log(response.data.message); // Phone added to cart
        console.log("Updated Cart:", response.data.cart); // Display the updated cart
        // router.push("/finish");
      })
      .catch((error) => {
        console.error(
          "Error adding phone to cart:",
          error.response?.data || error.message
        );
      });
  };

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
          <Button label="Order now ->" onClick={handleAddToCard} />
        </div>
      </div>

      <StockStatus inStock={phone.stock > 0} />
      {/* <StockStatus in_stock={false} /> */}
    </div>
  );
};
