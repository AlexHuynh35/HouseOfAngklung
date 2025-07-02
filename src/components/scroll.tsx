"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollableDescription({ description }: { description: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;

      const atBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 1;
      setIsAtBottom(atBottom);
    };

    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);

    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="max-h-30 overflow-y-auto pr-2"
      >
        <p className="text-gray-800 whitespace-pre-line">{description}</p>
      </div>
      {!isAtBottom && (
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-300" />
      )}
    </div>
  );
}