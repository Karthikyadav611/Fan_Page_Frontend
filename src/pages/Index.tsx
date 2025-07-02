
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Players from "@/components/Players";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Players />
        <Achievements />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
