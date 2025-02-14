"use client";

import { useContext } from "react";
import { CartContext, Product } from "../Cart/CartContext";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useContext(CartContext);

  function handleAddToCart() {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  }

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="px-8 py-2 bg-yellow-base text-black-base text-sm rounded-md hover:bg-yellow-400 hover:shadow-lg"
      >
        Add to cart
      </button>
    </div>
  );
}
