import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="space-y-6 md:pr-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight hero-text">
          Menciptakan desain yang berbicara tentang Anda dan untuk Anda
        </h1>
        <p className="text-text mt-4 md:mt-6 text-base md:text-lg">
          Kami percaya bahwa bekerja dengan klien, Anda memerlukan pendekatan personal dan profesional. 
          Proses desain interior kami akan menyesuaikan dengan visi dan kebutuhan Anda. 
          Kami akan memastikan bahwa Anda selalu terlibat, dapat melihat perkembangan pekerjaan yang sedang kami kerjakan.
        </p>
        <a href="#contact">
          <Button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Mulai proyek
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </a>
      </div>
      <div className="rounded-lg overflow-hidden">
        <img 
          src={IMAGES.hero} 
          alt="Dapur modern dengan aksen kayu" 
          className="w-full h-auto object-cover rounded-lg" 
        />
      </div>
    </section>
  );
}
