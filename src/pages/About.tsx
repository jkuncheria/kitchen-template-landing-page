import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, DollarSign, Timer, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema, getOrganizationSchema } from "@/lib/structuredData";

const stats = [
  { icon: Clock, label: "years of experience", value: "10+" },
  { icon: DollarSign, label: "savings vs full replacement", value: "70%" },
  { icon: Award, label: "completed projects", value: "200+" },
  { icon: Timer, label: "project work hours", value: "1000+" },
];

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.resurfacega.com/" },
    { name: "About Us", url: "https://www.resurfacega.com/about" }
  ]);

  const structuredData = [breadcrumbSchema, getOrganizationSchema()];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us | Fairfield Kitchen Cabinets | Fairfield's Premier Refinishing Specialists"
        description="Learn about Fairfield Kitchen Cabinets - Metro Fairfield's trusted refinishing experts. 10+ years of experience, 200+ completed projects. Expert bathtub, cabinet, and countertop refinishing services."
        keywords="Fairfield Kitchen Cabinets, Fairfield refinishing company, bathtub refinishing experts, cabinet refinishing professionals, countertop resurfacing Fairfield, refinishing specialists Georgia"
        structuredData={structuredData}
      />
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About Fairfield Kitchen Cabinets | Fairfield's Premier Refinishing Specialists
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* About Us Section */}
              <div className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                  <div className="order-2 md:order-1">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                      ABOUT US
                    </h2>
                    <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                      <p>
                        Tired of outdated kitchens and baths? <span className="font-semibold text-foreground">Fairfield Kitchen Cabinets</span> delivers stunning, budget-friendly resurfacing for cabinets, bathtubs/showers, and countertops across Metro Fairfield.
                      </p>
                      <p>
                        Skip the costly, disruptive remodel and revitalize your space with our expert craftsmanship and premium finishes. We restore worn surfaces to like-new condition or create a completely updated look with our wide range of modern styles.
                      </p>
                      <p>
                        Unlock the Potential of Your Fairfield Home with Fairfield Kitchen Cabinets. Imagine stepping into a kitchen or bathroom that feels brand new, without the stress and expense of a full renovation. That's the Fairfield Kitchen Cabinets promise.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="relative">
                      <img 
                        src="/ruben.jpg" 
                        alt="Owner of Fairfield Kitchen Cabinets" 
                        className="w-full h-auto rounded-lg shadow-xl object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <Button 
                    size="lg" 
                    onClick={scrollToContact}
                    className="bg-accent hover:bg-accent/90 text-background"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} className="border-0 shadow-lg text-center">
                      <CardContent className="p-6">
                        <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                          {stat.value}
                        </div>
                        <div className="h-1 w-12 bg-accent mx-auto mb-3" />
                        <div className="text-sm text-muted-foreground uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default About;

