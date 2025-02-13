import { getPriceById } from "@/lib/Stripe/getPrice";
import { getProductById } from "@/lib/Stripe/getProduct";
import Image from "next/image";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const product = await getProductById(id);
  const price = await getPriceById(product.default_price!.toString());

  return (
    <div className="container">
      <div className="flex flex-row gap-4xl">
        {/* Product Image Gallery */}
        <div className="w-full flex flex-row gap-3xl">
          <div className="flex flex-col gap-md"></div>

          <div className="w-full aspect-square overflow-clip rounded">
            <Image
              src={product.images[0] ?? "/default.png"}
              width={600}
              height={600}
              alt=""
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full">
          <span>Category</span>

          <div className="w-full flex justify-between items-center">
            <h2 className="my-md">{product.name}</h2>

            <span>${price}</span>
          </div>

          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
