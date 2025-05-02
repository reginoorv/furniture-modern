import { IMAGES } from "@/assets/images";
import { ArrowRight } from "lucide-react";

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

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-neutral">
      <h2 className="text-2xl md:text-3xl font-medium mb-12">Layanan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p className="text-text">
                {service.description}
              </p>
              <a href={`#${service.slug}`} className="inline-flex items-center text-sm hover-arrow mt-2">
                <span>Selengkapnya</span>
                <ArrowRight className="ml-2 w-4 h-4 arrow" />
              </a>
            </div>
            <div className="md:w-1/3">
              <img 
                src={service.image} 
                alt={service.title} 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
