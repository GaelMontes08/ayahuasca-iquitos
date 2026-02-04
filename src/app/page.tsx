import Hero from "@/components/Hero";
import About from "@/components/About";
import Maestros from "@/components/Maestros";
import Location from "@/components/Location";
import Ayahuasca from "@/components/Ayahuasca";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Maestros />
      <Location />
      <Ayahuasca />
      <Footer />
    </div>
  );
}

