"use client";

import { useContext } from "react";
import { CartContext } from "@/components/Cart/CartContext";
import Link from "next/link";
import Image from "next/image";
import convertPrice from "@/utils/convertPrice";
import Button from "@/components/Button/Button";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-3xl">
      <h2 className="text-4xl -tracking-[0.06em] font-extralight font-title text-orange-base mb-lg">
        In my bag
      </h2>

      <div className="flex gap-3xl">
        <div className="w-3/5">
          {cartItems.length === 0 ? (
            <p>
              Your cart is empty. <Link href="/">Go back to products</Link>.
            </p>
          ) : (
            <>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id} className="flex gap-lg items-center">
                    <div className="w-5xl aspect-square overflow-clip rounded-md">
                      <Image
                        src={item.image ?? "/default.png"}
                        alt={item.title}
                        width={200}
                        height={200}
                      />
                    </div>
                    <div className="w-full flex items-center justify-between">
                      <h3>{item.title}</h3>
                      <p>
                        ${(convertPrice(item.price) * item.quantity).toFixed(2)}
                      </p>
                      <p>Quantity: {item.quantity}</p>
                      <button onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button onClick={clearCart} className="mt-2xl">
                Clear Cart
              </button>
            </>
          )}
        </div>

        <div className="w-2/5">
          <div className="p-xl border-2 border-orange-base rounded-lg">
            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl -tracking-[0.06em] font-extralight font-title text-orange-base mb-lg">
                Total:
              </h3>

              <span>${convertPrice(total)}</span>
            </div>

            <div>
              <Button
                link="/checkout"
                text="Checkout"
                newTab={false}
                disabled={total === 0 ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
