import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Calendar, Info, Mail } from "lucide-react";
import cognitoTechfestLogo from "@assets/Untitled design_1759044466581.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur backdrop-blur-xl' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      data-testid="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img 
              src={cognitoTechfestLogo} 
              alt="CTF Logo" 
              className="w-12 h-12 object-contain transition-opacity duration-300"
              loading="eager"
              decoding="async"
              data-testid="nav-logo"
            />
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-foreground tracking-tight leading-none">
                  CAPTURE THE FLAG
                </h1>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
                  Cybersecurity Challenge
                </p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              data-testid="nav-link-home"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('event')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              data-testid="nav-link-event"
            >
              <Calendar className="w-4 h-4" />
              <span>Event</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              data-testid="nav-link-about"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              data-testid="nav-link-contact"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="nav-mobile-toggle"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          data-testid="nav-mobile-menu"
        >
          <div className="px-4 py-6 space-y-2">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 w-full text-left px-3 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              data-testid="nav-mobile-link-home"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('event')}
              className="flex items-center space-x-3 w-full text-left px-3 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              data-testid="nav-mobile-link-event"
            >
              <Calendar className="w-4 h-4" />
              <span>Event</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-3 w-full text-left px-3 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              data-testid="nav-mobile-link-about"
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-3 w-full text-left px-3 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              data-testid="nav-mobile-link-contact"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
