import { stripe } from "./stripe.js";

export async function getProductById(productId: string) {
  return await stripe.products.retrieve(productId);
}
