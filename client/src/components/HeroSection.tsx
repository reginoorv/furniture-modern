import { IMAGES } from "@/assets/images";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Add intersection observer for animation on scroll
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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="section-padding pt-24 pb-10 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
        <div 
          ref={heroRef} 
          className="space-y-6 md:pr-6 opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight hero-text">
            Menciptakan desain yang berbicara tentang <span className="text-wood-light">Anda</span> dan untuk <span className="text-wood-light">Anda</span>
          </h1>
          <p className="text-text mt-4 md:mt-6 text-base md:text-lg">
            Kami percaya bahwa bekerja dengan klien, Anda memerlukan pendekatan personal dan profesional. 
            Proses desain interior kami akan menyesuaikan dengan visi dan kebutuhan Anda. 
            Kami akan memastikan bahwa Anda selalu terlibat, dapat melihat perkembangan pekerjaan yang sedang kami kerjakan.
          </p>
          <div className="pt-2">
            <a 
              href="#contact"
              className="inline-block"
            >
              <Button className="bg-black text-white px-6 py-6 rounded-full text-sm font-medium hover:bg-wood hover:scale-105 transition-all duration-300 h-auto">
                <span>Mulai proyek</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
        <div 
          ref={imageRef}
          className="rounded-lg overflow-hidden opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out image-scale"
        >
          <img 
            src={IMAGES.hero} 
            alt="Dapur modern dengan aksen kayu" 
            className="w-full h-auto object-cover rounded-lg shadow-xl" 
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
