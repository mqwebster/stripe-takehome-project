"use client";
import Link from "next/link";

export default function Button({
  link,
  text,
  newTab,
  disabled = false,
}: {
  link: string;
  text: string;
  newTab: boolean;
  disabled?: boolean;
}) {
  return (
    <Link
      href={link}
      target={newTab ? "_blank" : ""}
      className=""
      onClick={(e) => disabled && e.preventDefault()}
    >
      <button
        disabled={disabled}
        className={`px-8 py-2 text-sm rounded-md text-black-base ${
          disabled
            ? "bg-gray-400"
            : "bg-yellow-base hover:bg-yellow-400 hover:shadow-lg"
        }`}
      >
        {text}
      </button>
    </Link>
  );
}
