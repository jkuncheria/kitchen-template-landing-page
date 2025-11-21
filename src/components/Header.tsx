import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when route changes to a different page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Handle scroll detection for header animation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (id: string, delay: number = 100) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerHeight = 120; // Approximate header height including padding + extra offset
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, delay);
  };

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      scrollToElement(id, 300);
    } else {
      scrollToElement(id, 100);
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    // If we're on the home page, scroll directly
    if (location.pathname === "/") {
      scrollToElement(id, 100);
    } else {
      // If we're on a different page, navigate to home first, then scroll
      navigate("/");
      scrollToElement(id, 300);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Determine if we should show transparent header (only on home page at top)
  const isTransparent = !isScrolled && location.pathname === "/";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isTransparent
          ? 'bg-transparent py-6 md:py-6 border-transparent'
          : 'bg-background/95 backdrop-blur-md py-4 md:py-4 shadow-sm border-border'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between relative">
          {/* Mobile: Call Now CTA - Left of centered logo */}
          <Button 
            asChild 
            size="sm"
            className={`md:hidden bg-accent hover:bg-accent/90 text-background text-xs px-3 py-2 h-auto relative z-20 transition-all duration-300 ${
              isTransparent ? 'opacity-90' : ''
            }`}
          >
            <a href="tel:7703102402">
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Call Now
            </a>
          </Button>
          
          {/* Mobile: Centered Logo */}
          <Link 
            to="/" 
            onClick={handleLogoClick} 
            className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center hover:opacity-80 transition-all duration-300 z-10"
          >
            <span className={`text-xl font-display font-bold tracking-tight transition-colors duration-300 ${
              isTransparent ? 'text-white drop-shadow-lg' : 'text-foreground'
            }`}>
              NewKitchen
            </span>
          </Link>
          
          {/* Desktop: Left Logo */}
          <Link 
            to="/" 
            onClick={handleLogoClick} 
            className="hidden md:flex items-center hover:opacity-80 transition-all duration-300"
          >
            <span className={`text-2xl font-display font-bold tracking-tight transition-colors duration-300 ${
              isTransparent ? 'text-white drop-shadow-lg' : 'text-foreground'
            }`}>
              New Kitchen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              onClick={(e) => {
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`hover:text-accent hover:bg-accent/10 px-3 py-2 rounded-md transition-all duration-300 ${
                isTransparent ? 'text-white/90' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className={`hover:text-accent hover:bg-accent/10 px-3 py-2 rounded-md transition-all duration-300 flex items-center gap-1 outline-none focus:bg-accent/10 ${
                isTransparent ? 'text-white/90' : 'text-foreground'
              }`}>
                About
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/about" className="cursor-pointer">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/warranty" className="cursor-pointer">
                    Warranty
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/marietta" className="cursor-pointer">
                    Service Areas
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/care-tips" className="cursor-pointer">
                    Care Tips
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link 
              to="/services" 
              className={`hover:text-accent hover:bg-accent/10 px-3 py-2 rounded-md transition-all duration-300 ${
                isTransparent ? 'text-white/90' : 'text-foreground'
              }`}
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-accent hover:bg-accent/10 px-3 py-2 rounded-md transition-all duration-300 ${
                isTransparent ? 'text-white/90' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
            <div className="flex items-center gap-3">
              <Button asChild variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-background">
                <Link to="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Free Meeting
                </Link>
              </Button>
              <Button asChild className="bg-accent hover:bg-accent/90">
                <a href="tel:7703102402">
                  <Phone className="w-4 h-4 mr-2" />
                  (770) 310-2402
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 hover:bg-secondary rounded-lg transition-all duration-300 relative z-20 ml-auto ${
              isTransparent && !isMenuOpen ? 'text-white' : 'text-foreground'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-xl border-t border-border py-6 px-4 flex flex-col space-y-4 animate-fade-in-down">
            <Link 
              to="/" 
              onClick={(e) => {
                setIsMenuOpen(false);
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="block w-full text-left py-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-all px-3"
            >
              Home
            </Link>
            
            {/* About Dropdown */}
            <div>
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                className="w-full flex items-center justify-between text-left py-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-all px-3"
              >
                <span>About</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {isAboutOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-accent/20 pl-4">
                  <Link 
                    to="/about" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAboutOpen(false);
                    }} 
                    className="block w-full text-left py-2 text-foreground/80 hover:text-accent hover:bg-accent/10 rounded-md transition-all px-3"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/warranty" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAboutOpen(false);
                    }} 
                    className="block w-full text-left py-2 text-foreground/80 hover:text-accent hover:bg-accent/10 rounded-md transition-all px-3"
                  >
                    Warranty
                  </Link>
                  <Link 
                    to="/marietta" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAboutOpen(false);
                    }} 
                    className="block w-full text-left py-2 text-foreground/80 hover:text-accent hover:bg-accent/10 rounded-md transition-all px-3"
                  >
                    Service Areas
                  </Link>
                  <Link 
                    to="/care-tips" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAboutOpen(false);
                    }} 
                    className="block w-full text-left py-2 text-foreground/80 hover:text-accent hover:bg-accent/10 rounded-md transition-all px-3"
                  >
                    Care Tips
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-all px-3">
              Our Services
            </Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-left py-2 text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-all px-3">
              Contact
            </Link>
            <Button asChild variant="outline" className="w-full border-2 border-accent text-accent hover:bg-accent hover:text-background">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Meeting
              </Link>
            </Button>
            <Button asChild className="w-full bg-accent hover:bg-accent/90">
              <a href="tel:7703102402">
                <Phone className="w-4 h-4 mr-2" />
                (770) 310-2402
              </a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
