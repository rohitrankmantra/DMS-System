import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Workflow } from "@/components/sections/Workflow";
import { Portfolio } from "@/components/sections/Portfolio";
import { Logos } from "@/components/sections/Logos";
import { QuoteBanner } from "@/components/sections/QuoteBanner";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSlider />
      <Hero />
      <Services />
      <About />
      <Features />
      <Workflow />
      <Portfolio />
      <Logos />
      <Team />
      <Testimonials />
      <Pricing />
      <QuoteBanner />

      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
