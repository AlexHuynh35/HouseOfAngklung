import Image from "next/image";
import { eventPhotoData } from "@/utils/eventPhotoData";

type MasonryProps = {
  path: string;
  numPhotos: number;
};

const Masonry = ({ path, numPhotos }: MasonryProps) => {
  const imageUrls = eventPhotoData(numPhotos, path);
  const chosenBig = new Set();
  for (let i = 0; i < imageUrls.length; i += 3) {
    if (Math.random() < 0.6) {
      const pick = (Math.random() < 0.5) ? i : i + 1;

      if (pick < imageUrls.length) {
        chosenBig.add(pick);
      }
    }
  }

  return (
    <div className="max-w-5xl mx-auto text-center grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
      {imageUrls.map((src, idx) => (
        <div
          key={idx}
          className={`${chosenBig.has(idx) ? "md:col-span-2 md:row-span-2" : ""} relative bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-102`}
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
  );
};

export default Masonry;