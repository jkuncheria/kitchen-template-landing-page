import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import AtlantaNewsFeature from "@/components/AtlantaNewsFeature";
import SEO from "@/components/SEO";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/structuredData";

const Index = () => {
  const structuredData = [
    getLocalBusinessSchema(),
    getWebSiteSchema(),
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Surface Pro Refinishing Atlanta | Bathtub, Cabinet & Countertop Resurfacing"
        description="Expert bathtub refinishing, cabinet resurfacing, and countertop restoration in Atlanta. Affordable alternative to replacement. Transform your kitchen & bathroom with precision. 70% savings vs full replacement."
        keywords="bathtub refinishing Atlanta, tub resurfacing Georgia, cabinet refinishing, countertop resurfacing, bathroom renovation Atlanta, kitchen refacing, bathtub reglazing, shower resurfacing, Atlanta refinishing services"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <Hero />
        <AtlantaNewsFeature />
        <Services />
        <About />
        <Reviews />
        <ContactForm />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
