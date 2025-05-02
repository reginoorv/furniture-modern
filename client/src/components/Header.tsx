import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <header 
        className={`
          fixed top-0 left-0 right-0 z-50 
          section-padding py-4 md:py-6 
          flex justify-between items-center
          transition-all duration-300 ease-in-out
          ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}
        `}
      >
        <div className="logo font-semibold tracking-wide text-lg md:text-xl relative z-20">
          <Link href="/" className="text-text-dark hover:text-wood-light transition-colors">
            HARMONY HOUSE
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm">
          <a href="#studio" className="hover:text-wood-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-wood-light after:transition-all hover:after:w-full">
            Tentang Studio
          </a>
          <a href="#projects" className="hover:text-wood-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-wood-light after:transition-all hover:after:w-full">
            Proyek
          </a>
          <a href="#services" className="hover:text-wood-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-wood-light after:transition-all hover:after:w-full">
            Layanan
          </a>
          <a href="#contact" className="hover:text-wood-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-wood-light after:transition-all hover:after:w-full">
            Kontak
          </a>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden relative z-20 p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-wood-light"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-wood-dark transition-transform duration-300 transform rotate-90 origin-center" />
          ) : (
            <Menu className="h-6 w-6 transition-transform duration-300" />
          )}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      <div 
        className={`
          fixed inset-0 z-40 bg-white py-24 px-6
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        <nav className="flex flex-col space-y-6 items-center text-lg">
          <a 
            href="#studio" 
            className="py-2 relative w-fit hover:text-wood-light transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-wood-light after:transition-all hover:after:w-full" 
            onClick={closeMobileMenu}
          >
            Tentang Studio
          </a>
          <a 
            href="#projects" 
            className="py-2 relative w-fit hover:text-wood-light transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-wood-light after:transition-all hover:after:w-full" 
            onClick={closeMobileMenu}
          >
            Proyek
          </a>
          <a 
            href="#services" 
            className="py-2 relative w-fit hover:text-wood-light transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-wood-light after:transition-all hover:after:w-full" 
            onClick={closeMobileMenu}
          >
            Layanan
          </a>
          <a 
            href="#contact" 
            className="py-2 relative w-fit hover:text-wood-light transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-wood-light after:transition-all hover:after:w-full" 
            onClick={closeMobileMenu}
          >
            Kontak
          </a>
        </nav>
      </div>
    </>
  );
}
