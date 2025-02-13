import { stripe } from "./stripe.js";

export async function getAllProducts(limit: number) {
  return await stripe.products.list({ active: true, limit: limit ?? 12 });
}
