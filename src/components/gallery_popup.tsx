'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { eventPhotoData } from "@/utils/eventPhotoData";

type GalleryPopupProps = {
  eventName: string;
  path: string;
  numPhotos: number;
};

const GalleryPopup = ({ eventName, path, numPhotos }: GalleryPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrls = eventPhotoData(numPhotos, path);
  const firstSix = imageUrls.slice(0, 6);

  return (
    <div className="mb-1">
      <h1 className="text-gray-600 inline-flex items-center gap-2 max-h-[2.5rem]">
        <span><strong>Missed the event?</strong></span>
        <button
          className="bg-brown-600 text-white px-3 py-1 rounded-md hover:bg-brown-700 transition-transform transform hover:scale-105"
          onClick={() => setIsOpen(true)}
        >
          View Photo Gallery
        </button>
      </h1>

      {isOpen && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full shadow-lg relative max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl text-brown-800 font-bold mb-4 text-center">{eventName} Photos</h2>

            {/* First 6 images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {firstSix.map((src, idx) => (
                <div key={idx} className="relative w-full h-48">
                  <Image
                    src={src}
                    alt={`event${idx + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-4 flex justify-center">
              <button className="bg-brown-600 text-white px-3 py-1 rounded-md hover:bg-brown-700 transition-transform transform hover:scale-105">
                <Link href="/gallery/maestro_sam_udjo_event">View All Photos</Link>
              </button>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPopup;