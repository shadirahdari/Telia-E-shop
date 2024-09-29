"use client"; // You must add this for client components 

import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Importing the ChangeEvent type from React
import { ChangeEvent } from "react";

const ProductFilterPage = () => {
  const router = useRouter();

  const [brand, setBrand] = useState("Apple");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>) => setBrand(e.target.value);
  
  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (e.target.name === "min") {
      setMinPrice(value);
    } else {
      setMaxPrice(value);
    }
  };

  const handleApply = () => {
    console.log(`Filtering by: Brand: ${brand}, Price: ${minPrice} - ${maxPrice}`);
    router.push(`/?brand=${brand}&minPrice=${minPrice}&maxPrice=${maxPrice}`);
  };

  const handleClear = () => {
    setBrand("Apple");
    setMinPrice(0);
    setMaxPrice(1000);
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
          <div>
            <label>Min: </label>
            <input
              type="number"
              name="min"
              min="0"
              max={maxPrice}
              value={minPrice}
              onChange={handlePriceChange}
            />
            <label>Max: </label>
            <input
              type="number"
              name="max"
              min={minPrice}
              max="1000"
              value={maxPrice}
              onChange={handlePriceChange}
            />
          </div>
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
