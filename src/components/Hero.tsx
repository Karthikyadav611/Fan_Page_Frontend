import { Crown, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/fancrowd.jpg')" }}
      >
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 py-20 z-20">
        <div className="text-center text-white">
          {/* Title */}
          <div className="flex justify-center items-center mb-6">
            <Crown className="w-16 h-16 text-yellow-300 mr-4 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="text-yellow-300">Chennai</span>
              <br />
              <span className="text-blue-200">Super Kings</span>
            </h1>
            <Crown className="w-16 h-16 text-yellow-300 ml-4 animate-pulse" />
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-yellow-100 font-medium">
            Whistle Podu! The Champions of IPL
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
            <div className="flex items-center bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Trophy className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-lg font-semibold">5x IPL Champions</span>
            </div>
            <div className="flex items-center bg-white/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Star className="w-6 h-6 text-yellow-300 mr-2" />
              <span className="text-lg font-semibold">Since 2008</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
  href="https://www.instagram.com/cskfansofficial?igsh=MWNydzVzeDlwbDl1OA=="
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
  >
    Join the Yellow Army
  </Button>
</a>

        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300/30 rounded-full blur-xl animate-bounce z-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/30 rounded-full blur-xl animate-bounce delay-1000 z-20"></div>
    </section>
  );
};

export default Hero;
