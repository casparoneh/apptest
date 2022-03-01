import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-8 container mx-auto flex justify-around">
      <Link href="/">
        <a className="font-mono text-2xl text-orange-700">Home</a>
      </Link>
      <Link href="/">
        <a className="font-mono text-2xl text-orange-700">Products</a>
      </Link>
      
      <Link href="/about">
        <a className="font-mono text-2xl text-orange-700">About</a>
      </Link>

      <Link href="/contact">
        <a className="font-mono text-2xl text-orange-700">Contact</a>
      </Link>
    </div>
  );
};

export default Navbar;
