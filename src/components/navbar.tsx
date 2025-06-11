"use client";

import Link from "next/link";
import { useState } from "react";

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
          <Link href="/about" className="block py-2 text-gray-800 hover:text-brown-700">
            About
          </Link>

          <Link href="/events" className="block py-2 text-gray-800 hover:text-brown-700">
            Events
          </Link>

          <div className="relative group">
            <button className="block py-2 text-gray-800 hover:text-brown-700">
              Learn
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-md border rounded mt-2">
              <Link href="/learn/history" className="block px-4 py-2 text-sm hover:bg-gray-100">
                History
              </Link>
              <Link href="/learn/people" className="block px-4 py-2 text-sm hover:bg-gray-100">
                Maestro Sam Udjo
              </Link>
            </div>
          </div>
        </div>

        <Link href="/" className="text-xl font-bold text-brown-800">
          Angklung House San Francisco
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;