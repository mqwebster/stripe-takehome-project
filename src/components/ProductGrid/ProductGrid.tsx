import { getAllProducts } from "@/lib/Stripe/getAllProducts";
import ProductCard from "../ProductCard/ProductCard";

export default async function ProductGrid({ type }: { type: "All products" }) {
  let products;

  if (type === "All products") {
    products = await getAllProducts(12);
  }

  return (
    <div className="container">
      <h2>New Releases</h2>
      <div className="w-full grid grid-cols-3 gap-2">
        {products!.data.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
