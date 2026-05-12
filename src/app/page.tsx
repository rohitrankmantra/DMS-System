import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Workflow } from "@/components/sections/Workflow";
import { Portfolio } from "@/components/sections/Portfolio";
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
      <Hero />
      <Services />
      <About />
      <Features />
      <Workflow />
      <Portfolio />
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
