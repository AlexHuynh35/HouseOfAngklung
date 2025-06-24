import Image from "next/image";

type FactProps = {
  title: string;
  description: string;
  imageUrl: string;
  onLeft: boolean;
  hasTitle: boolean;
  isFit: boolean;
};

const FactCard = ({ title, description, imageUrl, onLeft, hasTitle, isFit }: FactProps) => {
  if (onLeft) {
    return (
      <div className="max-w-5xl mx-auto my-8 flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="w-full md:w-1/2 p-6">
          <div className="relative w-full h-[350px]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className={`${isFit ? "object-contain" : "object-cover"} rounded-lg`}
            />
          </div>
        </div>

        <div className="md:w-1/2 p-6 flex flex-col text-center justify-center">
          {hasTitle ? (
            <h2 className="text-3xl text-center font-bold mb-6 text-brown-800">{title}</h2>
          ) : (
            <div></div>
          )}
          <blockquote className="text-xl text-left italic border-l-4 border-brown-500 p-4 text-brown-700">
            {description}
          </blockquote>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-5xl mx-auto my-8 flex flex-col-reverse md:flex-row bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="md:w-1/2 p-6 flex flex-col text-center justify-center">
          {hasTitle ? (
            <h2 className="text-3xl text-center font-bold mb-6 text-brown-800">{title}</h2>
          ) : (
            <div></div>
          )}
          <blockquote className="text-xl text-left md:text-right italic border-l-4 md:border-l-0 md:border-r-4 border-brown-500 p-4 text-brown-700">
            {description}
          </blockquote>
        </div>

        <div className="w-full md:w-1/2 p-6">
          <div className="relative w-full h-[350px]">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className={`${isFit ? "object-contain" : "object-cover"} rounded-lg`}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default FactCard;