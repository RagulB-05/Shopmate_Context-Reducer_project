import React from "react";
import ProductCard from "../components/ProductCard";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 1500,
      image: "/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 4090,
      image: "/images/1002.png",
    },
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 1790,
      image: "/images/1003.png",
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 3599,
      image: "/images/1004.png",
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 1999,
      image: "/images/1005.png",
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 2999,
      image: "/images/1006.png",
    },
  ];
  return (
    <main>
      <section className="Products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
