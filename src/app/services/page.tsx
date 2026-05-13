import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesPage } from "@/components/pages/ServicesPage";

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />
      <ServicesPage />
      <Footer />
    </main>
  );
}
