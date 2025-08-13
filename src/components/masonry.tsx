'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { eventPhotoData } from "@/utils/eventPhotoData";

type MasonryProps = {
  path: string;
  numPhotos: number;
};

const Masonry = ({ path, numPhotos }: MasonryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const imageUrls = eventPhotoData(numPhotos, path);
  const chosenBig = useRef((() => {
    const set = new Set<number>();
    for (let i = 0; i < imageUrls.length; i += 3) {
      if (Math.random() < 0.6) {
        const pick = (Math.random() < 0.5) ? i : i + 1;

        if (pick < imageUrls.length) {
          set.add(pick);
        }
      }
    }
    return set;
  })()).current;

  return (
    <div>
      <div className="max-w-5xl mx-auto text-center grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
        {imageUrls.map((src, idx) => (
          <div
            key={idx}
            className={`${chosenBig.has(idx) ? "md:col-span-2 md:row-span-2" : ""} relative bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-102`}
            onClick={() => setSelectedPhoto(src)}
          >
            <Image
              src={src}
              alt={`photo-${idx}`}
              fill
              className="object-cover rounded-md p-2 pb-8"
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white p-10 rounded-lg max-w-5xl w-full shadow-lg relative max-h-[90vh] overflow-y-auto">
            <Image
              src={selectedPhoto}
              alt="selected"
              width={1000}
              height={1000}
              className="object-contain mx-auto"
            />

            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setSelectedPhoto(null)}
            >
              ✕
            </button>

            <Link
              href={selectedPhoto}
              download
              className="absolute top-9 right-3 text-gray-600 hover:text-black"
              title="Download"
            >
              ↓
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Masonry;