import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 border-b-2 border-orange-base bg-cream-base">
      <div className="container py-md w-full flex justify-between items-center">
        <div className="w-2/5">
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              width={4096}
              height={600}
              alt="Cozy Threads Logo"
              className="w-full"
            />
          </Link>
        </div>

        <div>
          <nav className="flex gap-4">
            <Link
              href={"https://mqwebster.com"}
              target="_blank"
              className=" text-sm"
            >
              Visit my portfolio
            </Link>
          </nav>

          <div>
            {/* Saving this space for a checkout menu/button */}
            {/* Should be built in separate file and imported here */}
          </div>
        </div>
      </div>
    </header>
  );
}
