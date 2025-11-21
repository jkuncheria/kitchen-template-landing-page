import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    { city: "Fairfield", zip: "30301-30399" },
    { city: "Marietta", zip: "30060-30068" },
    { city: "Alpharetta", zip: "30004-30009" },
    { city: "Roswell", zip: "30075-30077" },
    { city: "Sandy Springs", zip: "30328-30342" },
    { city: "Johns Creek", zip: "30022-30097" },
    { city: "Dunwoody", zip: "30338-30360" },
    { city: "Conyers", zip: "30012-30094" },
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="hover:opacity-80 transition-opacity">
                <span className="text-xl font-bold text-background">Fairfield Kitchen Cabinets</span>
              </Link>
            </div>
            <p className="text-background/80 text-sm">
              We bring pride and passion to every project that we undertake, with a professional team we bring your dreams to life.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:9738731745" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
                <Phone className="w-4 h-4" />
                (973) 873-1745
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <div>
                  <div>93 US 46</div>
                  <div>Fairfield, NJ 07004</div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-background/80 mb-4">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-background/60 mt-1.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-background">{area.city}</div>
                    <div className="text-background/60 text-xs">ZIP: {area.zip}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-background/20">
              <p className="text-sm text-background/70 mb-3">Don't see your area?</p>
              <a
                href="tel:9738731745"
                className="inline-flex items-center gap-2 text-background/80 hover:text-background transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                Contact us to check
              </a>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-background/80 mb-6">
              <li>
                <Link to="/" className="hover:text-background transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-background transition-colors">About</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-background transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/warranty" className="hover:text-background transition-colors">Warranty</Link>
              </li>
              <li>
                <Link to="/care-tips" className="hover:text-background transition-colors">Care Tips</Link>
              </li>
              <li>
                <Link to="/marietta" className="hover:text-background transition-colors">Service Areas</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-background transition-colors">Contact</Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100067611466928&name=xhp_nt__fb__action__open_user&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/surface_pro_refinishing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {currentYear} Fairfield Kitchen Cabinets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
