"use client";

import { CartContext } from "@/components/Cart/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-orange-base bg-cream-base">
      <div className="container py-md w-full flex justify-between items-center">
        <div className="w-2/5">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={4096}
              height={600}
              alt="Cozy Threads Logo"
              className="w-full"
            />
          </Link>
        </div>

        <div>
          <nav className="flex gap-4">
            <Link href={"/cart"} className="w-[28px] h-[28px] text-sm">
              <div className="relative w-full h-full">
                <FiShoppingBag size={28} color="#1f1f1f" />

                {cartItems.length > 0 && (
                  <div className="w-[20px] h-[20px] p-[2px] absolute -top-md -right-md flex items-center justify-center bg-orange-base text-cream-base text-xs rounded-full">
                    {cartItems.length}
                  </div>
                )}
              </div>
            </Link>
          </nav>

          <div>
            {/* Saving this space for a checkout menu/button */}
            {/* Should be built in separate file and imported here */}
          </div>
        </div>
      </div>
    </header>
  );
}
