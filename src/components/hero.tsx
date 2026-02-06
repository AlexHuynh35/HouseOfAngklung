/* import Image from 'next/image'; */
import { SaveTheDate } from "@/components";

export default function Hero() {
  return (
    <section className="w-full pt-14 md:pt-16">
      {/*
      <div className="relative w-full h-[300px] md:h-[350px]">
        <Image
          src="/media/general/angklung.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      */}

      <SaveTheDate />

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