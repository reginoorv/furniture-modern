import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="px-6 md:px-12 lg:px-20 py-6 flex justify-between items-center">
        <div className="logo font-semibold tracking-wide text-lg">
          <Link href="/" className="text-text-dark">
            HARMONY HOUSE
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm">
          <a href="#studio" className="hover:text-wood transition-colors">Tentang Studio</a>
          <a href="#projects" className="hover:text-wood transition-colors">Proyek</a>
          <a href="#services" className="hover:text-wood transition-colors">Layanan</a>
          <a href="#contact" className="hover:text-wood transition-colors">Kontak</a>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white w-full py-4 px-6 shadow-md absolute z-10`}>
        <div className="flex flex-col space-y-4">
          <a href="#studio" className="py-2" onClick={closeMobileMenu}>Tentang Studio</a>
          <a href="#projects" className="py-2" onClick={closeMobileMenu}>Proyek</a>
          <a href="#services" className="py-2" onClick={closeMobileMenu}>Layanan</a>
          <a href="#contact" className="py-2" onClick={closeMobileMenu}>Kontak</a>
        </div>
      </div>
    </>
  );
}
