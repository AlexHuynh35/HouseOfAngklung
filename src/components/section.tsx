type SectionTitleProps = {
  title: string;
  onLeft: boolean;
};

const SectionTitle = ({ title, onLeft }: SectionTitleProps) => {
  if(onLeft) {
    return (
      <div className="mb-8 flex flex-row items-center justify-center gap-x-4">
        <div className="h-1 w-1/8 bg-brown-500 rounded" />
        <h2 className="text-2xl md:text-3xl font-semibold text-brown-800">{title}</h2>
        <div className="h-1 w-1/2 bg-brown-500 rounded" />
      </div>
    );
  } else {
    return (
      <div className="mb-8 flex flex-row items-center justify-center gap-x-4">
        <div className="h-1 w-1/2 bg-brown-500 rounded" />
        <h2 className="text-2xl md:text-3xl font-semibold text-brown-800">{title}</h2>
        <div className="h-1 w-1/8 bg-brown-500 rounded" />
      </div>
    );
  }
};

export default SectionTitle;