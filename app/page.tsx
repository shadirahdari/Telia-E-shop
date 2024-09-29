"use client"; // You must add this for client components

import { useRouter } from "next/navigation";
import { ProductCard } from "./components/ProductCard"; // Ensure this is correct
import { PhonesList } from "./PhonesList"; // Ensure this is correct
import { Form } from "./components/Form"; // Ensure this is correct

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
      {/* Uncomment to use */}
      {/* <ProductCard /> */}
      <button onClick={handleGoToFilter}>Go to /filter</button>
      <button onClick={handleFinish}>Go to Finish</button>
      {/* Uncomment to use */}
      {/* <PhonesList /> */}
      <Form />
      <img src="/assets/svg/logo.svg" alt="Logo" loading="lazy" />

    </div>
  );
}
