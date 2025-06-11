type SectionTitleProps = {
  title: string;
  onLeft: boolean;
};

const SectionTitle = ({ title, onLeft }: SectionTitleProps) => {
  if(onLeft) {
    return (
      <div className="mb-8 max-w-6xl mx-auto flex flex-row items-center justify-center gap-x-4">
        <div className="h-1 bg-brown-500 rounded flex-[1]" />
        <h2 className="text-2xl md:text-3xl font-semibold text-brown-800">{title}</h2>
        <div className="h-1 bg-brown-500 rounded flex-[2]" />
      </div>
    );
  } else {
    return (
      <div className="mb-8 max-w-6xl mx-auto flex flex-row items-center justify-center gap-x-4">
        <div className="h-1 bg-brown-500 rounded flex-[2]" />
        <h2 className="text-2xl md:text-3xl font-semibold text-brown-800">{title}</h2>
        <div className="h-1 bg-brown-500 rounded flex-[1]" />
      </div>
    );
  }
};

export default SectionTitle;