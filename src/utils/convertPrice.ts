export default function convertPrice(price: number | string) {
  if (typeof price === "string") {
    price = Number(price);
  }

  return Number((price / 100).toFixed(2));
}
