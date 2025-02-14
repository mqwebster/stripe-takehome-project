import { getAllProducts } from "@/lib/Stripe/getAllProducts";
import ProductCard from "../ProductCard/ProductCard";

export default async function ProductGrid({ type }: { type: "All products" }) {
  let products;

  if (type === "All products") {
    products = await getAllProducts(12);
  }

  return (
    <div className="py-3xl">
      <h2 className="text-4xl -tracking-[0.06em] font-extralight font-title text-orange-base mb-lg">
        New Releases
      </h2>
      <div className="w-full grid grid-cols-3 gap-x-2 gap-y-8">
        {products!.data.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}
