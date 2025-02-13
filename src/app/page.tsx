import { stripe } from "../lib/stripe.js";
import CheckoutForm from "../components/checkout.jsx";

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const calculateOrderAmount = (items: { id: string }[]) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };

  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: calculateOrderAmount([{ id: "xl-shirt" }]),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return (
    <div className="w-3/5 mx-auto">
      <CheckoutForm clientSecret={clientSecret} />
    </div>
  );
}
