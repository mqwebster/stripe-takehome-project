import Image from "next/image";
import Link from "next/link.js";
import { getPriceById } from "@/lib/Stripe/getPrice";
import convertPrice from "@/utils/convertPrice";

export default async function ProductCard({ product }: any) {
  const price = await getPriceById(product.default_price);

  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-full aspect-square overflow-clip rounded">
        <Image
          src={product.images[0] ?? "/default.png"}
          width={400}
          height={400}
          alt={`Image for product: ${product.name}`}
          className="object-contain w-full"
        />
      </div>

      <div className="mt-2">
        <h3>{product.name}</h3>

        <span className="mt-1">${convertPrice(price)}</span>
      </div>
    </Link>
  );
}
