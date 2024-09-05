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
    image:
      "https://designmarket.com.co/cdn/shop/products/1_Mesadetrabajo1.png?v=1672255913",
  },
  {
    id: 3,
    name: "Helecho",
    price: 30,
    image:
      "https://cdn.pixabay.com/photo/2020/06/26/18/32/fern-5343592_1280.png",
  },
  {
    id: 4,
    name: "Bromelia",
    price: 50,
    image:
      "https://agrojardinprimavera.wordpress.com/wp-content/uploads/2013/08/freya.png",
  },
  {
    id: 5,
    name: "Bugambilia",
    price: 30,
    image: "https://cantia.com.mx/cdn/shop/products/A16193.png?v=1709750631",
  },
  {
    id: 6,
    name: "Orquidea",
    price: 12,
    image:
      "https://alasypistilos.com/wp-content/uploads/2022/10/PRE-_0001_Orquidea-Phalaenopsis-Mini-maceta-conica-.png",
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
