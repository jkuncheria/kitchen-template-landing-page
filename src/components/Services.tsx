import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Bath, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const homePageServices = [
  {
    icon: UtensilsCrossed,
    title: "Countertop Resurfacing",
    description: "Restore beauty to your countertops with our resurfacing expertise. Durable finishes that look stunning for years.",
    image: "/Services/CountertopResurfacing.jpg",
    price: "Call for Free Quote",
  },
  {
    icon: Home,
    title: "Cabinet Refinishing & Refacing",
    description: "Breathe new life into your cabinets with professional refacing. Modern finishes at a fraction of the cost of full replacement.",
    image: "/Services/KitchenRefacing.jpeg",
    price: "Call for Free Quote",
  },
  {
    icon: Bath,
    title: "Standard Bathtub Resurfacing",
    description: "Transform worn bathtubs into like-new condition with our expert refinishing services. Save thousands compared to replacement.",
    image: "/Services/StandardBathtubResurfacing.jpg",
    price: "Starts at $725.00",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-12 md:py-20 bg-secondary/30 scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Our Services</h2>
          <p className="text-base md:text-lg text-muted-foreground px-2">
            We provide a range of professional resurfacing services designed to transform your home
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-6 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {homePageServices.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up border-0 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden flex-shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-4 md:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">{service.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 flex-grow">{service.description}</p>
                  {service.price && (
                    <div className="mt-auto pt-4">
                      {service.price === "Call for Free Quote" ? (
                        <a href="tel:7703102402" className="inline-flex items-baseline gap-1 bg-secondary/50 rounded-lg px-4 py-2.5 border-2 border-foreground/20 hover:bg-secondary/70 transition-colors cursor-pointer">
                          <span className="text-base md:text-lg font-semibold text-foreground">{service.price}</span>
                        </a>
                      ) : (
                        <div className="inline-flex items-baseline gap-1 bg-secondary/50 rounded-lg px-4 py-2.5 border-2 border-foreground/20">
                          <span className="text-base md:text-lg font-semibold text-foreground">{service.price}</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* See All Services Button */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-background">
            <Link to="/services">
              See All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
