import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Send, Upload, X, User, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { uploadFilesToRenoLens, submitContactFormToRenoLens } from "@/lib/renolensApi";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    budget: "",
    service: "",
    message: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Step 1: Upload files if any
      let imageUrls: string[] = [];
      if (uploadedFiles.length > 0) {
        try {
          imageUrls = await uploadFilesToRenoLens(uploadedFiles);
        } catch (uploadError) {
          console.error("File upload error:", uploadError);
          toast({
            title: "File Upload Error",
            description: "Some files failed to upload, but we'll still submit your form. Please try again if needed.",
            variant: "destructive",
          });
          // Continue with form submission even if file upload fails
        }
      }

      // Step 2: Submit form data to RenoLens
      await submitContactFormToRenoLens(formData, imageUrls);

      // Success - show toast and reset form
      toast({
        title: "Thank you for contacting us!",
        description: "We will get back to you as soon as possible.",
      });
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        budget: "",
        service: "",
        message: "",
      });
      setUploadedFiles([]);
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: error instanceof Error 
          ? error.message 
          : "There was an error submitting your form. Please try again or call us at (770) 310-2402.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedFiles((prev) => [...prev, ...files]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20 scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Surface Pro Refinishing</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Let's talk about your project. Fill out the form below or give us a call to get started on transforming your space.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-foreground/10 shadow-xl">
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-foreground flex items-center gap-1.5 text-sm font-medium">
                          <User className="w-3.5 h-3.5 text-accent" />
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-10 border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all bg-background text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-foreground flex items-center gap-1.5 text-sm font-medium">
                          <Phone className="w-3.5 h-3.5 text-accent" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-10 border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all bg-background text-sm"
                          placeholder="(770) 555-1234"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-foreground flex items-center gap-1.5 text-sm font-medium">
                        <Mail className="w-3.5 h-3.5 text-accent" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-10 border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all bg-background text-sm"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="address" className="text-foreground text-sm font-medium">Project Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="h-10 border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all bg-background text-sm"
                        placeholder="123 Main St, Atlanta, GA 30301"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="service" className="text-foreground text-sm font-medium">Service Needed</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                          disabled={isSubmitting}
                        >
                          <SelectTrigger className="h-10 border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all bg-background text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bathtub">Bathtub Refinishing</SelectItem>
                            <SelectItem value="cabinet">Cabinet Refinishing</SelectItem>
                            <SelectItem value="countertop">Countertop Resurfacing</SelectItem>
                            <SelectItem value="bathroom">Bathroom Upgrades</SelectItem>
                            <SelectItem value="kitchen">Kitchen Upgrades</SelectItem>
                            <SelectItem value="epoxy">Epoxy Floor Coating</SelectItem>
                            <SelectItem value="multiple">Multiple Services</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="budget" className="text-foreground text-sm font-medium">Budget Range</Label>
                        <Input
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="h-10 border border-foreground/20 focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all bg-background text-sm"
                          placeholder="Select an estimated budget"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-foreground text-sm font-medium">Upload Photos (Optional)</Label>
                      <div className={`border border-dashed border-foreground/20 rounded-lg p-6 transition-all group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:border-accent hover:bg-accent/5 cursor-pointer'}`}>
                        <input
                          type="file"
                          id="file-upload"
                          multiple
                          accept="image/*"
                          onChange={handleFileChange}
                          disabled={isSubmitting}
                          className="hidden"
                        />
                        <label
                          htmlFor="file-upload"
                          className={`flex flex-col items-center justify-center ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <div className="w-12 h-12 bg-accent/10 group-hover:bg-accent/20 rounded-full flex items-center justify-center mb-3 transition-all">
                            <Upload className="w-6 h-6 text-accent" />
                          </div>
                          <span className="text-sm font-medium text-foreground mb-1">
                            Click to upload or drag and drop
                          </span>
                          <span className="text-xs text-foreground/60">
                            PNG, JPG, GIF up to 10MB each
                          </span>
                        </label>
                      </div>
                      {uploadedFiles.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {uploadedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 border-2 border-foreground/20 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                            >
                              <span className="text-sm text-foreground truncate flex-1 font-medium">
                                {file.name}
                              </span>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="ml-3 p-1.5 hover:bg-accent hover:text-background rounded-md transition-colors"
                                aria-label="Remove file"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-background h-11 text-base font-semibold shadow-md hover:shadow-lg transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Get Free Consultation
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
