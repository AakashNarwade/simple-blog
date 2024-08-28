"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create Post",
  },
];
export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-8 border-b">
      <Link href={"/"}>
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="logo"
          className="w-[35px] h-[35px]"
          width={35}
          height={35}
        />
      </Link>
      <nav>
        <ul className="flex gap-x-6  text-sm">
          {navLinks.map((link, i) => (
            <li key={i}>
              <Link
                className={`${
                  pathname === link.href ? " text-black" : "text-zinc-400"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
