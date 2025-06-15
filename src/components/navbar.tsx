"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Dropdown } from "@/components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-8xl md:pl-12 mx-auto flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>

        <div className="hidden md:flex gap-6">
          <Link href="/about" className="block py-2 text-gray-800 hover:text-brown-700 hover:underline">
            About
          </Link>

          <Link href="/events" className="block py-2 text-gray-800 hover:text-brown-700 hover:underline">
            Events
          </Link>

          <Dropdown />
        </div>

        <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <Link href="/" className="text-md md:text-xl font-bold text-brown-800">
            Angklung House of San Francisco
          </Link>

          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/angklung2.jpg"
              alt="Angklung"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col gap-2 mt-3 md:hidden pr-4">
          <Link href="/about" className="block py-2 text-gray-800 hover:text-brown-700 hover:underline">
            About
          </Link>

          <Link href="/events" className="block py-2 text-gray-800 hover:text-brown-700 hover:underline">
            Events
          </Link>

          <Dropdown />
        </div>
      )}
    </nav>
  );
};

export default Navbar;