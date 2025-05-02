import { Link } from "wouter";
import { Instagram, Facebook, MapPin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="section-padding py-10 md:py-16 bg-neutral-light border-t border-neutral-gray relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-wood-dark via-wood to-wood-light opacity-70"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="fade-in">
          <h3 className="text-lg font-medium mb-4 text-wood">HARMONY HOUSE</h3>
          <p className="max-w-md text-sm text-text mb-4">
            Studio desain interior yang fokus pada kenyamanan, keindahan, dan fungsionalitas untuk menciptakan ruang yang mencerminkan kepribadian Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm fade-in-delayed">
          <div className="space-y-3">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-wood-light mr-2 mt-0.5" />
              <div>
                <p>Jalan Sudirman No. 123</p>
                <p>Jakarta, 10150</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-wood-light mr-2" />
              <p>hello@harmonyhouse.id</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-dark hover:text-wood-light transition-colors duration-300 flex items-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 mr-2" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-dark hover:text-wood-light transition-colors duration-300 flex items-center"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 mr-2" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between text-sm text-text-light pt-6 border-t border-neutral-gray">
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
          <a 
            href="#studio" 
            className="hover:text-wood-light transition-colors duration-300"
          >
            Tentang Studio
          </a>
          <a 
            href="#projects" 
            className="hover:text-wood-light transition-colors duration-300"
          >
            Proyek
          </a>
          <a 
            href="#services" 
            className="hover:text-wood-light transition-colors duration-300"
          >
            Layanan
          </a>
          <a 
            href="#contact" 
            className="hover:text-wood-light transition-colors duration-300"
          >
            Kontak
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} HARMONY HOUSE. Hak Cipta Dilindungi.</p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 p-3 rounded-full bg-wood text-white
          shadow-lg hover:bg-wood-dark transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-wood-light
          ${showScrollTop ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
        `}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
