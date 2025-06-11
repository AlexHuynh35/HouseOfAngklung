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
        <div className="md:w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2 text-brown-800">{description}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-5xl mx-auto my-8 flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-2 text-brown-800">{description}</h2>
        </div>
        <div className="md:w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    );
  }
};

export default FactCard;