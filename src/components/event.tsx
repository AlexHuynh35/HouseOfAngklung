import Image from "next/image";
import { formatDate } from "@/utils/formatDate";

type EventCardProps = {
  title: string;
  date: string;
  time: string;
  building: string;
  address: string;
  description: string;
  imageUrl: string;
};

const EventCard = ({ title, date, time, building, address, description, imageUrl }: EventCardProps) => {
  return (
    <div className="max-w-5xl mx-auto my-8 flex flex-col md:flex-row md:items-center bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="w-full md:w-1/2 p-4">
        <div className="relative w-full h-[350px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2 text-brown-800">{title}</h2>
        <p className="text-gray-600 mb-1"><strong>Date:</strong> {formatDate(date)}</p>
        <p className="text-gray-600 mb-1"><strong>Time:</strong> {time}</p>
        <p className="text-gray-600 mb-3">
          <strong>Location:</strong><br />
          <span className="pl-4 block">{building}</span>
          <span className="pl-4 text-sm text-gray-600">{address}</span>
        </p>
        <p className="text-gray-800">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;