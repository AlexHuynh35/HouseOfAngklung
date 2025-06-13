import Image from "next/image";

type LearningSectionProps = {
  title: string;
  imageUrl: string;
  text: string[]
};

const LearningSection = ({ title, imageUrl, text }: LearningSectionProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="relative w-full h-96 md:w-1/2">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded shadow"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-brown-800 mb-4">{title}</h2>
          {text.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningSection;