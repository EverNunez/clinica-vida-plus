import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Professionals from "@/components/Professionals";
import Testimonials from "@/components/Testimonials";
import WhatsappCTA from "@/components/WhatsappCTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Results />
        <Professionals />
        <Testimonials />
        <WhatsappCTA />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
