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
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}
