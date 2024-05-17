"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="z-50 flex items-center justify-between lg:justify-center max-lg:px-8 lg:gap-[7rem] fixed top-5 left-[5%] md:left-[20%] lg:left-[25%] bg-white/30 w-[90%] md:w-[60%] lg:w-[50%] h-12 rounded-full backdrop-blur">
      {pathname !== "/" && (
        <h1 className="text-black">
          <Link href="/">⬅︎</Link>
        </h1>
      )}
      {pathname !== "/awards" && (
        <h1 className="text-deep-black font-bold text-lg md:text-xl">
          <Link href="/awards">Awards</Link>
        </h1>
      )}
      {pathname !== "/feats" && (
        <h1 className="text-deep-black font-bold text-lg md:text-xl">
          <Link href="/feats">Feats</Link>
        </h1>
      )}
      {pathname !== "/timeline" && (
        <h1 className="text-deep-black font-bold text-lg md:text-xl">
          <Link href="/timeline">Timeline</Link>
        </h1>
      )}
    </div>
  );
};

export default Navbar;
