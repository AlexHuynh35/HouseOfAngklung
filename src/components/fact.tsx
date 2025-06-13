import Image from "next/image";

type FactProps = {
  title: string;
  description: string;
  imageUrl: string;
  onLeft: boolean;
};

const FactCard = ({ title, description, imageUrl, onLeft }: FactProps) => {
  if (onLeft) {
    return (
      <div className="max-w-5xl mx-auto my-8 flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="relative w-full h-[350px] m-4 md:w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="md:w-1/2 p-6 flex flex-col text-center justify-center">
          <h2 className="text-2xl font-bold mb-2 text-brown-800">{description}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-5xl mx-auto my-8 flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="md:w-1/2 p-6 flex flex-col text-center justify-center">
          <h2 className="text-2xl font-bold mb-2 text-brown-800">{description}</h2>
        </div>

        <div className="relative w-full h-[350px] m-4 md:w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    );
  }
};

export default FactCard;