import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const moments = [
    {
      title: "MS Dhoni's Helicopter Shot",
      description: "The iconic finish that defined cricket",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/mFsyGkx2wzA",
      thumbnailUrl: "/thumbnails/dhoni.png"
    },
    {
      title: "IPL 2023 Victory Celebration",
      description: "The moment we became champions again",
      type: "video",
      videoUrl: "https://youtube.com/embed/EOOd-wKE_uE?si=iRTdQV6UL1LFwMJ1",
      thumbnailUrl: "/thumbnails/2023ipl.jpg"
    },
    {
      title: "Whistle Podu at Chepauk",
      description: "The Yellow Army in full voice",
      type: "video",
      videoUrl: "https://youtube.com/embed/IqNJWA2QMpY?si=j-tuJtvWGlclDvIk",
      thumbnailUrl: "/thumbnails/cheers.jpg"
    },
    {
      title: "Raina's fastest runs (87 of 25 balls)",
      description: "Mr. IPL at his absolute best",
      type: "video",
      videoUrl: "https://youtube.com/embed/Dx8XDOHR87s?si=8Qy8ZjK2MXq-59lL",
      thumbnailUrl: "/thumbnails/raina87.jpg"
    },
    {
      title: "Jadeja's All-round Performance",
      description: "The ultimate team player delivers",
      type: "video",
      videoUrl: "https://youtube.com/embed/614-vhE4S4w?si=q1VMiFDedJZpXjEz",
      thumbnailUrl: "/thumbnails/jadeja37.jpg"
    },
    {
      title: "Trophy Presentation 2021",
      description: "Champions once again",
      type: "video",
      videoUrl: "https://youtube.com/embed/_SMkDYW60mM?si=gu_fMEa8OU0B_BcN",
      thumbnailUrl: "/thumbnails/2021ipl.jpg"
    }
  ];

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % moments.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + moments.length) % moments.length);

  useEffect(() => {
    if (isVideoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % moments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVideoPlaying,moments.length]);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        typeof event.data === "string" &&
        event.data.includes("infoDelivery") &&
        event.data.includes('"playerState":1') // 1 means PLAYING
      ) {
        setIsVideoPlaying(true);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  const currentMoment = moments[currentImage];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">Memorable</span>{" "}
            <span className="text-blue-300">Moments</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Relive the greatest moments in CSK history through our exclusive gallery
          </p>
        </div>

        {/* Featured Video Carousel */}
        <div className="mb-16">
          <Card className="bg-gray-800 border-gray-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <div className="h-96 flex items-center justify-center bg-black">
                  {currentMoment.type === "video" && currentMoment.videoUrl ? (
                    <iframe
                      className="w-full h-full"
                      src={currentMoment.videoUrl}
                      title={currentMoment.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      onLoad={() => {
                        const iframe = document.querySelector('iframe');
                        iframe?.contentWindow?.postMessage(
                          JSON.stringify({ event: 'listening' }),
                          '*'
                        );
                      }}
                    />
                  ) : (
                    <div className="text-center px-6">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <Play className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {currentMoment.title}
                      </h3>
                      <p className="text-blue-100">{currentMoment.description}</p>
                    </div>
                  )}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {moments.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentImage ? "bg-yellow-400" : "bg-white/50"
                      }`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {moments.map((moment, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                index === currentImage
                  ? "ring-2 ring-yellow-400 bg-yellow-400/20"
                  : "bg-gray-800 hover:bg-gray-700"
              } border-gray-600`}
              onClick={() => setCurrentImage(index)}
            >
              <CardContent className="p-2">
                <div className="relative">
                  <img
                    src={moment.thumbnailUrl}
                    alt={moment.title}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <Play className="absolute bottom-2 right-2 w-5 h-5 text-white bg-black/60 rounded-full p-1" />
                </div>
                <p className="text-sm text-white font-medium truncate">
                  {moment.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Fan Moments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700">
  <CardContent className="p-6">
    <div
      className="h-48 rounded-lg mb-4 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/thumbnails/chepauk.png')",
      }}
    >
      {/* Optional Bright Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-brightness-110"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <div className="text-4xl mb-2">🏟️</div>
          <p className="font-bold text-lg drop-shadow-lg">Chepauk Stadium</p>
        </div>
      </div>
    </div>
    <h4 className="text-lg font-bold text-white mb-2">Home Sweet Home</h4>
    <p className="text-gray-300 text-sm">The fortress where legends are made</p>
  </CardContent>
</Card>


           <Card className="bg-gray-800 border-gray-700">
  <CardContent className="p-6">
    <div
      className="h-48 rounded-lg mb-4 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/thumbnails/battlecry.jpeg')",
      }}
    >
      {/* Optional contrast overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-brightness-110"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <div className="text-4xl mb-2">🎺</div>
          <p className="font-bold text-lg drop-shadow-lg">Whistle Podu</p>
        </div>
      </div>
    </div>
    <h4 className="text-lg font-bold text-white mb-2">The Battle Cry</h4>
    <p className="text-gray-300 text-sm">The chant that echoes across stadiums</p>
  </CardContent>
</Card>


            <Card className="bg-gray-800 border-gray-700">
  <CardContent className="p-6">
    <div
      className="h-48 rounded-lg mb-4 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/thumbnails/fansunited.jpg')", // Make sure this image exists
      }}
    >
      {/* Contrast overlay for readability */}
      <div className="absolute inset-0 bg-black/30 backdrop-brightness-110"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <div className="text-4xl mb-2">💛</div>
          <p className="font-bold text-lg drop-shadow-lg">Yellow Army</p>
        </div>
      </div>
    </div>
    <h4 className="text-lg font-bold text-white mb-2">United We Stand</h4>
    <p className="text-gray-300 text-sm">Fans from around the world unite</p>
  </CardContent>
</Card>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Gallery;
