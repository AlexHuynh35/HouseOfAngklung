type VideoProps = {
  title: string;
  description: string;
  videoUrl: string;
  onYouTube: boolean;
};

const VideoCard = ({ title, description, videoUrl, onYouTube }: VideoProps) => {
  if (onYouTube) {
    return (
      <div className="max-w-5xl mx-auto my-8 flex flex-col">
        <div className="w-full h-[600px] p-4">
          <iframe
            className="relative w-full h-full object-cover rounded-lg"
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-4 flex flex-col text-center justify-center">
          <h2 className="text-2xl mb-2 text-brown-800">{description}</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-5xl mx-auto my-8 flex flex-col">
        <div className="w-full h-[600px] p-4">
          <video controls className="relative w-full h-full object-cover rounded-lg">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="p-4 flex flex-col text-center justify-center">
          <h2 className="text-2xl mb-2 text-brown-800">{description}</h2>
        </div>
      </div>
    );
  }
};

export default VideoCard;