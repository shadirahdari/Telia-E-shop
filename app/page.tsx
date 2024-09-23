"use client"; // You must add this for client components

import { useRouter } from "next/navigation";

import { ProductCard } from "./components/ProductCard";
import { PhonesList } from "./PhonesList";

export default function Home() {
  const router = useRouter();

  const handleGoToFilter = () => {
    router.push("/filter");
  };

  const handleFinish = () => {
    router.push("/finish");
  };

  return (
    <div>
      {/* <ProductCard />}
       */}
      <button onClick={handleGoToFilter}>Go to /filter</button>
      <button onClick={handleFinish}>Go to Finish</button>
      <PhonesList />
    </div>
  );
}
