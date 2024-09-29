"use client"; // You must add this for client components

import { Button } from "../Button";
import { MonthlyPayment } from "../MonthlyPayment";
import { StockStatus } from "../StockStatus";
import { CardImage } from "../Img";
import { ColorDots } from "../ColorDots";
import { OverLine } from "../OverLine";
import { Text } from "../Text";
import "./style.css";
import axios from "axios";

export const ProductCard = ({ product }) => { // Change 'phone' to 'product'
  const handleAddToCard = () => {
    axios
      .post("/api/add-to-cart", { phoneId: product.id }) // Adjust this if necessary
      .then((response) => {
        console.log(response.data.message); // Phone added to cart
        console.log("Updated Cart:", response.data.cart); // Display the updated cart
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
            <OverLine company={product.company} title={product.model} /> {/* Adjusted from phone to product */}
            <ColorDots />
          </div>
        </div>
        <div>
          <Text text={product.description} /> {/* Adjusted from phone to product */}
        </div>

        <div className="es-price-botton">
          <MonthlyPayment price={Math.ceil(product.price / 12)} /> {/* Adjusted from phone to product */}
          <Button label="Order now ->" onClick={handleAddToCard} />
        </div>
      </div>

      <StockStatus inStock={product.stock > 0} /> {/* Adjusted from phone to product */}
    </div>
  );
};
