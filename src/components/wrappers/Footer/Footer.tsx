import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full min-h-[50vh] mt-4xl py-3xl bg-orange-base">
      <div className="container text-cream-base">
        <div className="flex justify-between">
          <div className="w-1/2 flex gap-2xl">
            <div className="w-full">
              <span>123 Cozytown Street, Chicago, IL 60605</span>
              <br />
              <span>(708)285-3181</span>
            </div>

            <div className="w-full">
              <span>
                Monday - Friday: <br />
                10:00AM - 7:00PM
              </span>
              <br />
              <span>
                Saturday - Sunday: <br />
                12:00AM - 5:00PM
              </span>
            </div>
          </div>

          <div className="w-1/3 flex gap-2xl">
            <div className="w-full"></div>

            <div className="w-full"></div>
          </div>
        </div>

        <div className="w-full mt-5xl">
          <Link href={"/"}>
            <Image src={"/logo-white.png"} alt="" width={4096} height={600} />
          </Link>
        </div>
      </div>
    </div>
  );
}
