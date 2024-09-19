export default function handler(req, res) {
  const phones = [
    {
      company: "Google",
      model: "Pixel 6",
      description: "Google's phone with Tensor chip",
      price: 599,
      stock: 12,
    },
    {
      company: "Apple",
      model: "iPhone 13 Pro",
      description: "Apple's flagship phone with A15 Bionic chip",
      price: 999,
      stock: 0,
    },
    {
      company: "Samsung",
      model: "Galaxy S21",
      description: "Samsung's latest Galaxy series phone with Exynos 2100",
      price: 799,
      stock: 8,
    },
    {
      company: "OnePlus",
      model: "OnePlus 9 Pro",
      description: "Premium Android phone with Hasselblad camera",
      price: 729,
      stock: 15,
    },
    {
      company: "Xiaomi",
      model: "Mi 11 Ultra",
      description: "Xiaomi's high-end phone with Snapdragon 888",
      price: 699,
      stock: 10,
    },
    {
      company: "Sony",
      model: "Xperia 1 III",
      description: "Sony's flagship phone with a 4K display and Snapdragon 888",
      price: 1199,
      stock: 3,
    },
    {
      company: "Huawei",
      model: "Mate 40 Pro",
      description: "Huawei's top-tier phone with Kirin 9000",
      price: 899,
      stock: 7,
    },
    {
      company: "Motorola",
      model: "Edge 20 Pro",
      description: "Motorola's flagship phone with Snapdragon 870",
      price: 599,
      stock: 20,
    },
    {
      company: "Google",
      model: "Pixel 5a",
      description: "Mid-range Pixel phone with great camera performance",
      price: 449,
      stock: 18,
    },
    {
      company: "Oppo",
      model: "Find X3 Pro",
      description: "Oppo's premium phone with Snapdragon 888 and 120Hz display",
      price: 899,
      stock: 6,
    }
  ];
  

  res.status(200).json(phones);
}
