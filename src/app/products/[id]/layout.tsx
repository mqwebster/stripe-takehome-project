import Link from "next/link";

export default async function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container py-2xl">
      <div className="my-sm flex gap-3 items-center">
        <Link href={"/"}>Home</Link>
        <span className="text-lg">{" / "}</span>
        <Link href={"/products"}>Products</Link>
      </div>

      {children}
    </div>
  );
}
