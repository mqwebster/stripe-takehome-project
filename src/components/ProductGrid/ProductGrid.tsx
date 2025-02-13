import ProductCard, { ProductCardInterface } from "../ProductCard/ProductCard";

export default function ProductGrid({
  list,
}: {
  list: ProductCardInterface[];
}) {
  return (
    <div className="container">
      <h2>New Releases</h2>
      <div className="w-full grid grid-cols-3 gap-2">
        {list.map((item) => {
          return <ProductCard key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}
