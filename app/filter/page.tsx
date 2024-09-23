"use client"; // You must add this for client components

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductFilterPage = () => {
  const router = useRouter();

  const [brand, setBrand] = useState("Apple");
  const [price, setPrice] = useState([0, 1000]);

  const handleBrandChange = (e) => setBrand(e.target.value);
  const handlePriceChange = (e) => setPrice([e.target.min, e.target.max]);

  const handleApply = () => {
    // Add logic to filter products based on brand, price, etc.
    console.log(`Filtering by: Brand: ${brand}, Price: ${price}`);
    router.push(`/?brand=${brand}`);
  };

  const handleClear = () => {
    router.push(`/`);
  };

  return (
    <div className="filter-page">
      <h1>Filter Products</h1>
      <form>
        <div className="filter-option">
          <label>Brand</label>
          <select value={brand} onChange={handleBrandChange}>
            <option value="Apple">Apple</option>
            <option value="Samsung">Samsung</option>
            <option value="OnePlus">OnePlus</option>
            <option value="Google">Google</option>
          </select>
        </div>

        <div className="filter-option">
          <label>Price Range</label>
          <input
            type="range"
            min="0"
            max="1000"
            value={price}
            onChange={handlePriceChange}
          />
        </div>

        <button type="button" onClick={handleApply}>
          Apply Filters
        </button>
        <button type="button" onClick={handleClear}>
          Clear Filters
        </button>
      </form>
    </div>
  );
};

export default ProductFilterPage;
