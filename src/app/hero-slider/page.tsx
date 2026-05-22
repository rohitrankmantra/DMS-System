import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSlider } from "@/components/sections/HeroSlider";

export default function HeroSliderPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <Footer />
    </main>
  );
}