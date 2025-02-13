"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // If using the return_url approach, Stripe will redirect the user to:
  // /success?payment_intent=<id>&payment_intent_client_secret=<secret>&redirect_status=succeeded
  const paymentIntentId = searchParams.get("payment_intent");
  const redirectStatus = searchParams.get("redirect_status");

  useEffect(() => {
    // If the user somehow got here without a payment_intent or it’s not "succeeded",
    // you might want to verify or redirect them away.
    if (!paymentIntentId || redirectStatus !== "succeeded") {
      router.replace("/");
    }
  }, [paymentIntentId, redirectStatus, router]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Payment Successful!</h2>
      <p>Your payment was processed successfully.</p>
      {/* Additional order details, etc. */}
    </div>
  );
}
