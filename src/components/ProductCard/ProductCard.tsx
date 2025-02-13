import Image from "next/image";
import { stripe } from "../../lib/Stripe/stripe.js";
import Link from "next/link.js";

export interface ProductCardInterface {
  id: string;
  name: string;
  description: string;
  default_price: string;
  images: string[];
}

export default async function ProductCard(props: ProductCardInterface) {
  const price = await stripe.prices.retrieve(props.default_price);

  return (
    <Link href={`/products/${props.id}`}>
      <div className="w-full aspect-square overflow-clip rounded">
        <Image
          src={props.images[0] ?? "/default.png"}
          width={400}
          height={400}
          alt={`Image for product: ${props.name}`}
          className="object-contain w-full"
        />
      </div>

      <div className="mt-2">
        <h3>{props.name}</h3>

        <span className="mt-1">{price.unit_amount! / 100}</span>
      </div>
    </Link>
  );
}
