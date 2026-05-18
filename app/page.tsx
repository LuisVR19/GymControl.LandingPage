import Nav from "./components/Nav";
import Hero from "./components/Hero";
import LogosBand from "./components/LogosBand";
import Producto from "./components/Producto";
import OwnerFeatures from "./components/OwnerFeatures";
import ClientFeatures from "./components/ClientFeatures";
import HowItWorks from "./components/HowItWorks";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogosBand />
        <Producto />
        <OwnerFeatures />
        <ClientFeatures />
        <HowItWorks />
        <Testimonial />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
