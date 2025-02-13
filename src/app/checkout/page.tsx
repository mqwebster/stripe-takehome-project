"use client";

import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/Cart/CartContext";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import convertPrice from "@/utils/convertPrice";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { clearCart } = useContext(CartContext);

  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: {
        return_url: "http://localhost:3000/success",
      },
    });

    if (error) {
      setMessage(error.message || "An unexpected error occurred.");
      setIsProcessing(false);
      return;
    }

    if (paymentIntent && paymentIntent.status === "succeeded") {
      clearCart();
      router.push("/success");
    } else if (paymentIntent?.status === "canceled") {
      router.push("/");
    } else {
      setMessage(`Payment status: ${paymentIntent?.status}`);
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <PaymentElement />
      <button disabled={!stripe || isProcessing} style={{ marginTop: "1rem" }}>
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {message && (
        <div style={{ marginTop: "1rem", color: "green" }}>{message}</div>
      )}
    </form>
  );
}

export default function CheckoutPage() {
  const { cartItems } = useContext(CartContext);
  const [clientSecret, setClientSecret] = useState("");

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    async function createPaymentIntent() {
      if (total === 0) return;

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total }),
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
    }
    createPaymentIntent();
  }, [total]);

  return (
    <main style={{ padding: "1rem", display: "flex", gap: "2rem" }}>
      <section style={{ flex: 1 }}>
        <h1>Checkout</h1>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div>
            <h2>Order Summary</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  style={{
                    borderBottom: "1px solid #ccc",
                    padding: "0.5rem 0",
                  }}
                >
                  <strong>{item.title}</strong> (x{item.quantity})
                  <br />${(convertPrice(item.price) * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
            <h3 style={{ marginTop: "1rem" }}>Total: ${convertPrice(total)}</h3>
          </div>
        )}
      </section>

      <section style={{ flex: 1 }}>
        {total === 0 ? (
          <p>Add some items to your cart first!</p>
        ) : clientSecret ? (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        ) : (
          <p>Loading Payment...</p>
        )}
      </section>
    </main>
  );
}
