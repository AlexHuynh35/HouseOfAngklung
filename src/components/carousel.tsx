'use client';

import { useState } from "react";
import Image from "next/image";

type MediaItem = {
  title: string;
  isImage: boolean;
  onYouTube: boolean;
  mediaUrl: string;
};

interface MediaCarouselProps {
  media: MediaItem[];
}

export default function MediaCarousel({ media }: MediaCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = media.length;

  const prevSlide = () => setCurrent((current - 1 + total) % total);
  const nextSlide = () => setCurrent((current + 1) % total);

  const item = media[current];

  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-video overflow-hidden rounded-lg shadow-md bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        {item.isImage ? (
          <Image
            src={item.mediaUrl}
            alt={item.title}
            fill
            className="object-cover rounded-lg"
          />
        ) : item.onYouTube ? (
          <iframe
            className="w-full h-full object-cover rounded-lg"
            src={item.mediaUrl}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            controls
            className="w-full h-full object-cover rounded-lg"
          >
            <source src={item.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Navigation Buttons */}
      {media.length > 1 && (
        <div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full z-10"
            aria-label="Previous"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full z-10"
            aria-label="Next"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}