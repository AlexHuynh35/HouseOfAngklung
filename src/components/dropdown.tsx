"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="block py-2 text-gray-800 hover:text-brown-700 hover:underline focus:outline-none"
      >
        Learn ▾
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-96 bg-white border rounded shadow-md z-50 p-4 grid grid-cols-2 gap-4">
          {/* Column 1: History */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">History</h3>
            <a href="/learn/musical_evolution" className="block text-sm text-gray-600 hover:underline">
              Musical Evolution
            </a>
          </div>

          {/* Column 2: People */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">People</h3>
            <a href="/learn/maestro_sam_udjo" className="block text-sm text-gray-600 hover:underline">
              Maestro Sam Udjo
            </a>
          </div>
        </div>
      )}
    </div>
  );
}