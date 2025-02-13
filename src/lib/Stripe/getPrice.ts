import { stripe } from "./stripe.js";

export async function getPriceById(priceId: string) {
  const price = await stripe.prices.retrieve(priceId);
  return price.unit_amount!;
}
