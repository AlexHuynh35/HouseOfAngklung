"use client";

import Link from "next/link";
import { useState } from "react";
import { Dropdown } from "@/components";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          ☰
        </button>

        <div className={`md:flex gap-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <Link href="/about" className="block py-2 text-gray-800 hover:text-brown-700 hover:underline">
            About
          </Link>

          <Link href="/events" className="block py-2 text-gray-800 hover:text-brown-700 hover:underline">
            Events
          </Link>

          <Dropdown />
        </div>

        <Link href="/" className="text-xl font-bold text-brown-800">
          Angklung House San Francisco
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;