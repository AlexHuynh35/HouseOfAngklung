import Image from 'next/image';

export default function SaveTheDate() {
  return (
    <div className="relative pt-3 w-full h-[300px] md:h-[350px] flex flex-row justify-center bg-[url('/media/general/savethedate.jpg')] bg-cover">
      <div className="w-full xl:w-1/2 flex flex-col justify-center">
        <h2 className="w-80 text-2xl md:w-150 md:text-6xl font-bold mb-5 pl-6 text-center text-white">
          SAVE THE DATE
        </h2>
        <h2 className="w-80 text-md md:w-150 md:text-3xl font-bold mb-8 p-3 text-center text-white bg-orange-600 rounded-r-full">
          April 29th to May 10th
        </h2>
        <h2 className="w-80 text-sm md:w-150 md:text-xl font-bold mb-2 pl-6 text-center text-balance text-white">
          Saung Angklung is making an appearance at the 2026 San Francisco International Arts Festival
        </h2>
      </div>
      <div className="hidden xl:flex w-1/2 flex-row justify-center items-center">
        <h2 className="w-40 text-xl font-bold m-2 text-center text-balance text-white">
          Saung Angklung of San Francisco
        </h2>
        <h2 className="w-12 text-4xl font-bold m-2 text-center text-balance text-white">
          x
        </h2>
        <div className="relative w-12 md:w-30 aspect-3/4 m-2">
          <Image
            src="/media/events/sfiaf/sfiaf.png"
            alt="Hero background"
            fill
            className="object-fill object-center"
            priority
          />
        </div>
      </div>
    </div>
  );
}