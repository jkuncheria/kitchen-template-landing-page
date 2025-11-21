import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle2, Star } from "lucide-react";
import ServiceArea from "@/components/ServiceArea";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const Marietta = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.resurfacega.com/" },
    { name: "Service Areas", url: "https://www.resurfacega.com/marietta" }
  ]);

  const services = [
    "Bathtub Refinishing",
    "Cabinet Refinishing",
    "Countertop Resurfacing",
    "Bathroom Upgrades",
    "Kitchen Upgrades",
    "Epoxy Floor Coating",
  ];

  const benefits = [
    "Local Marietta experts with years of experience",
    "Same-day service available",
    "Free consultations and estimates",
    "5-year warranty on all work",
    "Licensed and insured professionals",
    "Competitive pricing",
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Service Areas | Marietta & Metro Fairfield | Fairfield Kitchen Cabinets"
        description="Fairfield Kitchen Cabinets serves Marietta, Fairfield, and surrounding Metro Fairfield areas. Expert bathtub, cabinet, and countertop refinishing services. Call for service area information."
        keywords="Marietta refinishing, Fairfield refinishing services, Metro Fairfield refinishing, Marietta bathtub refinishing, service areas, refinishing near me"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
                <MapPin className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Fairfield Kitchen Cabinets in Marietta, GA
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your trusted local experts for bathtub refinishing, cabinet refinishing, and more in Marietta and surrounding areas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:7703102402">(770) 310-2402</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Marietta Service */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-xl mb-12">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6">Serving Marietta Homeowners</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Fairfield Kitchen Cabinets is proud to serve homeowners throughout <span className="font-semibold text-foreground">Marietta, Georgia</span> and 
                      the surrounding Metro Fairfield area. We understand the unique needs of Marietta residents and are committed to providing 
                      exceptional refinishing services that transform your home without the cost and hassle of full replacements.
                    </p>
                    <p>
                      Whether you're in historic Marietta Square, East Cobb, West Cobb, or anywhere in between, our experienced team is ready 
                      to help you revitalize your kitchen and bathroom surfaces. We've been serving Marietta families for years, building a 
                      reputation for quality workmanship, excellent customer service, and affordable solutions.
                    </p>
                    <p>
                      Our Marietta service area includes ZIP codes 30060-30068, and we're always happy to check if we can serve your specific 
                      location. Don't hesitate to reach out for a free consultation!
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Our Marietta Services</h3>
                    <ul className="space-y-3">
                      {services.map((service, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-4">Why Choose Us in Marietta</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Service Info Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Marietta Area</h4>
                    <p className="text-sm text-muted-foreground">
                      ZIP: 30060-30068
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Quick Response</h4>
                    <p className="text-sm text-muted-foreground">
                      Same-day service available
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-bold mb-2">Call Today</h4>
                    <p className="text-sm text-muted-foreground">
                      (770) 310-2402
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Component */}
        <ServiceArea />

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Marietta;

