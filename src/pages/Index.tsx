import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
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
        title="Fairfield Kitchen Cabinets Fairfield | Bathtub, Cabinet & Countertop Resurfacing"
        description="Expert bathtub refinishing, cabinet resurfacing, and countertop restoration in Fairfield. Affordable alternative to replacement. Transform your kitchen & bathroom with precision. 70% savings vs full replacement."
        keywords="bathtub refinishing Fairfield, tub resurfacing Georgia, cabinet refinishing, countertop resurfacing, bathroom renovation Fairfield, kitchen refacing, bathtub reglazing, shower resurfacing, Fairfield refinishing services"
        structuredData={structuredData}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Reviews />
        <ContactForm />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
