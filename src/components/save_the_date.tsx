export default function SaveTheDate() {
  return (
    <div className="relative w-full h-[300px] md:h-[350px] flex justify-center bg-[url('/media/general/savethedate.jpg')] bg-cover">
      <div className="w-full flex flex-col justify-center">
        <h2 className="w-80 text-2xl md:w-150 md:text-6xl font-bold mb-5 pl-6 text-center text-white">
          SAVE THE DATE
        </h2>
        <h2 className="w-80 text-md md:w-150 md:text-3xl font-bold mb-8 p-3 text-center text-white bg-blue-800 rounded-r-full">
          April 29th to May 10th
        </h2>
        <h2 className="w-80 text-sm md:w-150 md:text-xl font-bold mb-2 pl-6 text-center text-balance text-white">
          Saung Angklung is making an appearance at the 2026 San Francisco International Arts Festival
        </h2>
      </div>
    </div>
  );
}