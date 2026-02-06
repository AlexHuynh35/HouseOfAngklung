"use client";

import Image from 'next/image';
import { SaveTheDate } from "@/components";
import { useState, useEffect } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const total = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full pt-14 md:pt-16 overflow-hidden">
      <div className="relative w-full h-[350px]">
        <div
          className="relative w-full h-full flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          <div className="w-full h-full flex-shrink-0">
            <div className="relative w-full h-full">
              <Image
                src="/media/general/angklung.jpg"
                alt="Hero background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <div className="w-full h-full flex-shrink-0">
            <SaveTheDate />
          </div>
        </div>

        {total > 1 && (
          <div>
            <button
              onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/40 hover:bg-white/80 text-black p-2 rounded-full z-10"
              aria-label="Previous"
            >
              &lt;
            </button>
            <button
              onClick={() => setIndex((prev) => (prev + 1) % total)}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/40 hover:bg-white/80 text-black p-2 rounded-full z-10"
              aria-label="Next"
            >
              &gt;
            </button>
          </div>
        )}
      </div>

      <div className="px-4 pb-4 pt-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Saung Angklung of San Francisco
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="w-9/10 h-1 bg-brown-500 rounded" />
      </div>

    </section>
  );
}