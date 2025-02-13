"use client";

import { useContext } from "react";
import { CartContext } from "@/components/Cart/CartContext";
import Link from "next/link";
import Image from "next/image";
import convertPrice from "@/utils/convertPrice";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link href="/">Go back to products</Link>.
        </p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: "1rem" }}>
                <Image
                  src={item.image ?? "/default.png"}
                  alt={item.title}
                  width="80"
                  height={100}
                />
                <div>
                  <h2>{item.title}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>
                    ${(convertPrice(item.price) * item.quantity).toFixed(2)}
                  </p>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${convertPrice(total)}</h2>
          <button onClick={clearCart} style={{ marginRight: "1rem" }}>
            Clear Cart
          </button>
          <Link href="/checkout">
            <button>Checkout</button>
          </Link>
        </>
      )}
    </main>
  );
}
