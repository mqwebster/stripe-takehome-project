import { stripe } from "../lib/Stripe/stripe.js";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

export default async function Home() {
  const products = await stripe.products.list({ limit: 6 });

  return (
    <div>
      <ProductGrid list={products.data} />
    </div>
  );
}
