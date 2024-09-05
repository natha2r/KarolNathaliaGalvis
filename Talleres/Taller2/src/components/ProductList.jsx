import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Cactus",
    price: 10,
    image: "/resources/cactus.png",
  },
  {
    id: 2,
    name: "Bonsai",
    price: 20,
    image: "/resources/bonsai.png",
  },
  {
    id: 3,
    name: "Helecho",
    price: 30,
    image: "/resources/helecho.png",
  },
  {
    id: 4,
    name: "Bromelia",
    price: 50,
    image: "/resources/bromelia.png",
  },
  {
    id: 5,
    name: "Bugambilia",
    price: 30,
    image: "/resources/bugambilia.png",
  },
  {
    id: 6,
    name: "Orquidea",
    price: 12,
    image: "/resources/orquidea.png",
  },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
