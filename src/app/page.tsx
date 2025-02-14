import Button from "@/components/Button/Button";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

export default function Home() {
  return (
    <div className="container">
      <div className="h-[72vh] my-md">
        <div className="w-full h-full rounded-lg overflow-clip">
          <div className="bg-orange-base w-full h-full">
            <div className="w-full h-full flex flex-col justify-end p-3xl">
              <h1 className="text-cream-base font-title text-6xl -tracking-[0.06em] w-1/2">
                Amazing New Drops!
              </h1>

              <div className="text-cream-base mt-xl">
                {
                  "You've never been cozier than you will be we these new threads."
                }
              </div>

              <div className="mt-3xl">
                <Button link={"/products"} text="Shop All" newTab={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid type="All products" />
    </div>
  );
}
