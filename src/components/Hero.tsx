import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ArrowLeft, Check, Loader2 } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const services = [
  "Countertop Resurfacing",
  "Cabinet Refinishing & Refacing",
  "Standard Bathtub Resurfacing",
  "Standard Shower Resurfacing",
  "Large Shower Resurfacing",
  "Garden Tub Resurfacing",
  "Jacuzzi Jet Tub Resurfacing",
  "Claw Foot Tub Reglazing",
  "Tub Enclosure Resurfacing",
];

const timelineOptions = [
  "As soon as possible",
  "Within 1-2 weeks",
  "Within 1 month",
  "Just exploring options",
];

const Hero = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1 && formData.name && formData.email) {
      setStep(2);
    } else if (step === 2 && formData.service) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setStep(4);
    setIsSubmitted(true);
    
    // You can add API call here to submit the form data
    console.log("Form submitted:", formData);
  };

  const totalSteps = 4;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern luxury bathroom with refinished surfaces"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-40 md:pt-32 pb-32 text-center">
        <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-background leading-tight drop-shadow-2xl">
            Chicago's Premier <br /> <span className="text-accent font-extrabold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Kitchen Remodelers</span>
          </h1>
          <p className="text-lg text-background/80 max-w-2xl mx-auto">
            Expert bathtub, cabinet, and countertop refinishing services in Chicagoland. 
          </p>

          {/* Multi-Step Form */}
          <div className="max-w-md lg:max-w-2xl mx-auto bg-background/20 rounded-xl shadow-2xl p-4 md:p-6 border border-background/30">
            {/* Form Title */}
            {!isSubmitted && (
              <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
                Get Your Free Quote
              </h2>
            )}

            {/* Form Steps */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Step 1: Name and Email */}
                {step === 1 && (
                  <div className="space-y-3 animate-fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-white mb-1.5">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="!bg-white/20 border-white/30 !text-white placeholder:!text-white/70 focus:border-white/50 focus:ring-white/20 h-9 text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-white mb-1.5">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="!bg-white/20 border-white/30 !text-white placeholder:!text-white/70 focus:border-white/50 focus:ring-white/20 h-9 text-sm"
                          required
                        />
                      </div>
                    </div>
                    <Button
                      type="button"
                      onClick={handleNext}
                      disabled={!formData.name || !formData.email}
                      className="w-full lg:w-auto lg:mx-auto lg:px-8 bg-accent hover:bg-accent/90 text-background h-10 text-sm font-semibold"
                    >
                      Continue
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                )}

                {/* Step 2: Service Selection */}
                {step === 2 && (
                  <div className="space-y-3 animate-fade-in">
                    <div>
                      <label htmlFor="service" className="block text-xs font-medium text-white mb-1.5">
                        What service are you interested in?
                      </label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger className="!bg-white/20 border-white/30 !text-white placeholder:!text-white/70 focus:border-white/50 focus:ring-white/20 h-9 text-sm">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-background/95 backdrop-blur-md border-white/20">
                          {services.map((service) => (
                            <SelectItem key={service} value={service} className="text-foreground">
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2 lg:justify-center">
                      <Button
                        type="button"
                        onClick={handleBack}
                        variant="outline"
                        className="flex-1 lg:flex-initial lg:px-6 border-white/30 text-white hover:bg-white/20 bg-white/10 h-10 text-sm"
                      >
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={handleNext}
                        disabled={!formData.service}
                        className="flex-1 lg:flex-initial lg:px-6 bg-accent hover:bg-accent/90 text-background h-10 text-sm"
                      >
                        Continue
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Timeline */}
                {step === 3 && (
                  <div className="space-y-3 animate-fade-in">
                    <div>
                      <label htmlFor="timeline" className="block text-xs font-medium text-white mb-1.5">
                        When are you looking to get started?
                      </label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="!bg-white/20 border-white/30 !text-white placeholder:!text-white/70 focus:border-white/50 focus:ring-white/20 h-9 text-sm">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent className="bg-background/95 backdrop-blur-md border-white/20">
                          {timelineOptions.map((option) => (
                            <SelectItem key={option} value={option} className="text-foreground">
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-2 lg:justify-center">
                      <Button
                        type="button"
                        onClick={handleBack}
                        variant="outline"
                        className="flex-1 lg:flex-initial lg:px-6 border-white/30 text-white hover:bg-white/20 bg-white/10 h-10 text-sm"
                      >
                        <ArrowLeft className="mr-2 w-4 h-4" />
                        Back
                      </Button>
                      <Button
                        type="submit"
                        disabled={!formData.timeline || isSubmitting}
                        className="flex-1 lg:flex-initial lg:px-6 bg-accent hover:bg-accent/90 text-background h-10 text-sm"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 w-3 h-3 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Get Free Quote
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              /* Step 4: Success Message */
              <div className="text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 bg-accent/30 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white">Thank You!</h3>
                <p className="text-sm text-white/80">
                  We've received your request and will contact you shortly with a free quote.
                </p>
                <Button
                  onClick={() => {
                    setStep(1);
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", service: "", timeline: "" });
                  }}
                  className="bg-accent hover:bg-accent/90 text-background h-10 text-sm"
                >
                  Submit Another Request
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-background/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
