import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="py-10 md:py-16 px-6 md:px-12 lg:px-20 bg-neutral-light border-t border-neutral-gray">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-medium mb-4">HARMONY HOUSE</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p>Jalan Sudirman No. 123</p>
            <p>Jakarta, 10150</p>
          </div>
          <div>
            <p>hello@harmonyhouse.id</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-wood-light">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-wood-light">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between text-sm text-text-light pt-6 border-t border-neutral-gray">
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
          <a href="#studio" className="hover:text-wood-light">Tentang Studio</a>
          <a href="#projects" className="hover:text-wood-light">Proyek</a>
          <a href="#services" className="hover:text-wood-light">Layanan</a>
          <a href="#contact" className="hover:text-wood-light">Kontak</a>
        </div>
        <div className="mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} HARMONY HOUSE. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
