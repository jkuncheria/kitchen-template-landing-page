import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const Contact = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://www.resurfacega.com/" },
    { name: "Contact", url: "https://www.resurfacega.com/contact" }
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Contact Us | Fairfield Kitchen Cabinets | Free Consultation & Quote"
        description="Contact Fairfield Kitchen Cabinets for a free consultation. Call (770) 310-2402 or fill out our contact form. Expert bathtub, cabinet, and countertop refinishing in Fairfield."
        keywords="contact Fairfield Kitchen Cabinets, free quote Fairfield, refinishing consultation, bathtub refinishing quote, cabinet refinishing estimate, Fairfield refinishing contact"
        structuredData={breadcrumbSchema}
      />
      <Header />
      <main className="flex-grow pt-20">
        <ContactForm />
        
        {/* Contact Information Tiles */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Contact Tiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Phone */}
                <Card className="border-2 border-foreground/10 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground/70 mb-2">Phone</h3>
                    <a href="tel:7703102402" className="text-foreground hover:text-accent transition-colors font-medium">
                      (770) 310-2402
                    </a>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-2 border-foreground/10 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground/70 mb-2">Email</h3>
                    <a href="mailto:info@resurfacega.com" className="text-foreground hover:text-accent transition-colors font-medium text-sm break-all">
                      info@resurfacega.com
                    </a>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border-2 border-foreground/10 hover:border-accent transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-sm text-foreground/70 mb-2">Location</h3>
                    <div className="text-foreground text-sm font-medium">
                      <div>1400 General Arts Rd NW</div>
                      <div>Suite F</div>
                      <div>Conyers, GA 30012</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-6">
                <a 
                  href="https://www.facebook.com/profile.php?id=100067611466928&name=xhp_nt__fb__action__open_user&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/facebook.png" 
                    alt="Facebook" 
                    className="w-10 h-10 object-contain"
                  />
                </a>
                <a 
                  href="https://www.instagram.com/surface_pro_refinishing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img 
                    src="/instagram.png" 
                    alt="Instagram" 
                    className="w-10 h-10 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

