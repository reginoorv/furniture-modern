import { IMAGES } from "@/assets/images";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Service data with extended details for each service page
const serviceDetails = {
  "perencanaan": {
    title: "Perencanaan",
    heroImage: IMAGES.services.planning,
    description: "Membuat perencanaan teknis-desain proyek interior berdasarkan pengukuran ruangan, penempatan objek komunikasi, pengembangan konsep warna dan tekstur, pemilihan material dan penyelesaian pekerjaan di lokasi.",
    longDescription: [
      "Layanan perencanaan kami merupakan langkah awal dalam perjalanan desain interior Anda. Kami memulai dengan konsultasi mendalam untuk memahami visi, kebutuhan, dan preferensi Anda.",
      "Tim desain kami akan melakukan pengukuran detail ruangan dan membuat pemetaan yang tepat untuk menjadi dasar seluruh proses desain. Kami mempertimbangkan aspek fungsional, estetika, dan kenyamanan untuk menciptakan rencana yang komprehensif.",
      "Kami mengembangkan berbagai konsep desain, palet warna, dan tekstur yang didasarkan pada preferensi Anda dan tren desain terkini. Anda akan dilibatkan dalam setiap langkah, memastikan bahwa hasil akhir sesuai dengan harapan Anda."
    ],
    features: [
      "Pengukuran dan pemetaan detail ruangan",
      "Pengembangan konsep desain yang berfokus pada kebutuhan klien",
      "Pemilihan warna, tekstur, dan material",
      "Visualisasi 2D dan 3D dari desain yang diusulkan",
      "Perencanaan tata letak furnitur dan aksesori",
      "Estimasi biaya dan timeline proyek",
      "Revisi desain hingga mendapatkan persetujuan final"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "perlengkapan": {
    title: "Perlengkapan",
    heroImage: IMAGES.services.furnishing,
    description: "Perlengkapan proyek dari awal hingga akhir. Tim kami bekerja dengan tekstil, furnitur, pencahayaan, peralatan rumah tangga, pemanas dan penyejuk udara, material dan perlengkapan mandi. Kami memilih dengan cermat produk yang memenuhi persyaratan kualitas.",
    longDescription: [
      "Layanan perlengkapan kami dirancang untuk memastikan setiap elemen dalam ruangan Anda bekerja secara harmonis. Kami menangani seluruh proses pemilihan dan pengadaan furnitur, aksesori, dan perlengkapan lainnya yang sesuai dengan desain yang telah disetujui.",
      "Tim kami memiliki akses ke berbagai pemasok berkualitas tinggi untuk berbagai jenis produk, dari furnitur hingga pencahayaan dan aksesori. Kami membantu Anda memilih item yang tidak hanya estetis tetapi juga fungsional dan tahan lama.",
      "Selain pemilihan produk, kami juga mengelola pengiriman, perakitan, dan penataan semua elemen untuk memastikan implementasi yang sempurna dari visi desain."
    ],
    features: [
      "Pemilihan furnitur yang sesuai dengan gaya dan fungsi ruangan",
      "Pengadaan tekstil berkualitas (tirai, karpet, bantalan)",
      "Pemilihan lampu dan sistem pencahayaan",
      "Pemilihan peralatan rumah tangga yang efisien dan estetis",
      "Pengadaan aksesori dan dekorasi yang melengkapi desain",
      "Koordinasi pengiriman dan instalasi semua elemen",
      "Penataan akhir untuk menciptakan ruangan yang harmonis"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "proyek-desain": {
    title: "Proyek Desain",
    heroImage: IMAGES.services.designProject,
    description: "Membuat dokumen terperinci dan komprehensif dengan visualisasi fotorealistik untuk implementasi desain interior Anda. Desain proyek mencakup semua gambar teknis, pilihan material, furnitur dan pencahayaan berdasarkan preferensi individual.",
    longDescription: [
      "Layanan proyek desain kami mencakup pengembangan dokumentasi teknis dan visual yang komprehensif untuk implementasi desain interior Anda. Kami menghasilkan set gambar teknis yang detail dan visualisasi fotorealistik yang membantu Anda membayangkan hasil akhir sebelum konstruksi dimulai.",
      "Tim kami bekerja dengan perangkat lunak desain terkini untuk menciptakan dokumen yang akurat dan detail. Dari denah lantai hingga gambar elevasi dan detail konstruksi, kami menyediakan semua yang diperlukan untuk implementasi yang tepat.",
      "Kami juga mengembangkan spesifikasi material dan produk yang terperinci, memastikan bahwa setiap elemen desain dipilih dengan hati-hati dan memenuhi standar kualitas kami."
    ],
    features: [
      "Pengembangan gambar teknis detail (denah lantai, elevasi, detail)",
      "Visualisasi 3D fotorealistik dari ruangan yang didesain",
      "Spesifikasi material dan produk yang terperinci",
      "Dokumentasi untuk perizinan (jika diperlukan)",
      "Koordinasi dengan kontraktor dan tukang",
      "Pengawasan implementasi untuk memastikan ketepatan dengan desain",
      "Resolusi masalah yang mungkin muncul selama konstruksi"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  }
};

export default function ServiceDetail() {
  const [location] = useLocation();
  const slug = location.split('/')[2]; // Extract slug from URL: /layanan/[slug]
  const service = serviceDetails[slug as keyof typeof serviceDetails];
  
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100");
              entry.target.classList.remove("opacity-0");
              if (entry.target.classList.contains("translate-y-8")) {
                entry.target.classList.remove("translate-y-8");
              }
            }, 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (contentRef.current) observer.observe(contentRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (galleryRef.current) observer.unobserve(galleryRef.current);
    };
  }, []);

  // If service not found, show error message
  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow section-padding pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-medium mb-6">Layanan tidak ditemukan</h1>
            <p className="mb-8">Maaf, layanan yang Anda cari tidak dapat ditemukan.</p>
            <Link href="/#services">
              <Button className="bg-wood text-white hover:bg-wood-dark transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Layanan
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="pt-32 pb-16 section-padding relative opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
          <div className="relative z-20 max-w-4xl">
            <Link href="/#services" className="inline-flex items-center text-sm text-white bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-black/50 transition-all duration-300 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Layanan
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white shadow-text mb-4">
              Layanan {service.title}
            </h1>
            <p className="text-white shadow-text text-lg max-w-2xl">
              {service.description}
            </p>
          </div>
          
          <div className="absolute inset-0 -z-10">
            <img 
              src={service.heroImage} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        
        {/* Content Section */}
        <section 
          ref={contentRef}
          className="py-16 section-padding opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out"
        >
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {service.longDescription.map((paragraph, index) => (
                <p key={index} className="mb-6 text-text">{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-medium mb-6">Fitur Layanan <span className="text-wood-light">{service.title}</span></h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-wood-light mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section 
          ref={galleryRef}
          className="py-16 section-padding bg-neutral opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-medium mb-8">Galeri Proyek</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.gallery.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md image-scale">
                  <img 
                    src={image} 
                    alt={`Galeri ${service.title} ${index + 1}`} 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 section-padding bg-wood-light text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-medium mb-6">Siap untuk memulai proyek Anda?</h2>
            <p className="mb-8 text-white/90">Hubungi kami untuk konsultasi gratis dan diskusikan kebutuhan desain interior Anda</p>
            <Link href="/#contact">
              <Button className="bg-white text-wood-dark hover:bg-neutral-light hover:scale-105 transition-all duration-300 px-6 py-3 h-auto rounded-full shadow-lg">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}