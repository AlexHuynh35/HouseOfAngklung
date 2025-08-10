'use client';

import Link from "next/link";
import { useState } from "react";
import { eventPhotoData } from "@/utils/eventPhotoData";

type PhotosPopupProps = {
  eventName: string;
  path: string;
  selectedImages: number[];
};

const PhotosPopup = ({ eventName, path, selectedImages }: PhotosPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const imageUrls = eventPhotoData(selectedImages, path);
  const firstFive = imageUrls.slice(0, 5);

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
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">{eventName} Photos</h2>

            {/* First 5 images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {firstFive.map((src, idx) => (
                <img key={idx} src={src} alt={`${eventName} ${idx + 1}`} className="w-full h-auto rounded" />
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                <Link href="/gallery/maestro_sam_udjo">View All</Link>
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

export default PhotosPopup;