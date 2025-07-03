import Image from "next/image";

type PersonCardProps = {
  name: string;
  position: string;
  imageUrl: string;
};

const PersonCard = ({ name, position, imageUrl }: PersonCardProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-lg shadow p-4">
      <div className="relative w-full aspect-[3/4] mb-6">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold text-brown-800">{name}</h3>
      <div className="h-[3.2rem]">
        <p className="text-md text-gray-600">{position}</p>
      </div>
    </div>
  );
};

export default PersonCard;