import { IMAGES } from "@/assets/images";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Perencanaan",
    description: "Membuat perencanaan teknis-desain proyek interior berdasarkan pengukuran ruangan, penempatan objek komunikasi, pengembangan konsep warna dan tekstur, pemilihan material dan penyelesaian pekerjaan di lokasi.",
    image: IMAGES.services.planning,
    slug: "perencanaan"
  },
  {
    id: 2,
    title: "Perlengkapan",
    description: "Perlengkapan proyek dari awal hingga akhir. Tim kami bekerja dengan tekstil, furnitur, pencahayaan, peralatan rumah tangga, pemanas dan penyejuk udara, material dan perlengkapan mandi. Kami memilih dengan cermat produk yang memenuhi persyaratan kualitas.",
    image: IMAGES.services.furnishing,
    slug: "perlengkapan"
  },
  {
    id: 3,
    title: "Proyek Desain",
    description: "Membuat dokumen terperinci dan komprehensif dengan visualisasi fotorealistik untuk implementasi desain interior Anda. Desain proyek mencakup semua gambar teknis, pilihan material, furnitur dan pencahayaan berdasarkan preferensi individual.",
    image: IMAGES.services.designProject,
    slug: "proyek-desain"
  }
];

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100");
              entry.target.classList.remove("opacity-0");
              entry.target.classList.remove("translate-y-8");
            }, index * 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="flex flex-col md:flex-row gap-6 md:gap-10 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="md:w-2/3 space-y-4 order-2 md:order-1">
        <h3 className="text-xl font-medium text-wood">{service.title}</h3>
        <p className="text-text">
          {service.description}
        </p>
        <a 
          href={`#${service.slug}`} 
          className="inline-flex items-center text-sm group mt-2"
        >
          <span className="group-hover:text-wood-light transition-colors">Selengkapnya</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-wood-light" />
        </a>
      </div>
      <div className="md:w-1/3 order-1 md:order-2 image-scale">
        <img 
          src={service.image} 
          alt={service.title} 
          className="rounded-lg w-full h-auto object-cover shadow-md"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
            if (entry.target.classList.contains("translate-y-8")) {
              entry.target.classList.remove("translate-y-8");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section id="services" className="section-spacing section-padding bg-neutral relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-wood-light opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-wood opacity-5 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      
      <h2 
        ref={titleRef}
        className="text-2xl md:text-3xl font-medium mb-12 opacity-0 translate-y-8 transition-all duration-700"
      >
        <span className="text-wood-light">Layanan</span> kami
      </h2>
      
      <div className="grid grid-cols-1 gap-12 md:gap-16 relative z-10">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
