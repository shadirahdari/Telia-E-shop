"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "./components/ProductCard";

export function PhonesList() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("/api/phones")
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => {
        console.error("Error fetching phone data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Phone Listings</h1>
      <div className="phone-list">
        {phones.map((phone, index) => (
          <ProductCard key={index} phone={phone} />
        ))}
      </div>
    </div>
  );
}
