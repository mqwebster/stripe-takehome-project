import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe"; // Adjust the path to your Stripe instance

export async function POST(req) {
  let event;
  const signature = headers().get("stripe-signature");

  try {
    const reqBuffer = await req.text();
    event = stripe.webhooks.constructEvent(
      reqBuffer,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      console.log("PaymentIntent was successful!", paymentIntent.id);
      // Fulfill or update DB, send email, etc.
      break;
    }
    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      console.log("PaymentIntent failed", paymentIntent.id);
      // Handle the failure, notify user, etc.
      break;
    }
    // ... handle other events as needed
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}
