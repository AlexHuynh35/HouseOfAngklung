import Image from "next/image";

type PersonCardProps = {
  name: string;
  position: string;
  imageUrl: string;
};

const PersonCard = ({ name, position, imageUrl }: PersonCardProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-lg shadow p-4">
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={600}
        className="rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-semibold text-brown-800">{name}</h3>
      <p className="text-md text-gray-600">{position}</p>
    </div>
  );
};

export default PersonCard;