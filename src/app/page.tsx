import Button from "@/components/Button/Button";
import ProductGrid from "@/components/ProductGrid/ProductGrid";

export default function Home() {
  return (
    <div className="container">
      <div className="h-[72vh] my-md">
        <div className="w-full h-full rounded-lg overflow-clip">
          <div className="relative z-0 bg-orange-base w-full h-full">
            <div className="relative z-10 w-full h-full flex flex-col justify-end p-3xl">
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

            <div className="absolute top-0 left-0 w-full h-full">
              <video
                autoPlay
                playsInline
                loop
                muted
                width={"100%"}
                height={"100%"}
              >
                <source src="/home-movie.mp4" type="video/mp4"></source>
              </video>

              <div className="absolute top-0 left-0 w-full h-full bg-black-base/[0.24]"></div>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid type="All products" />
    </div>
  );
}
