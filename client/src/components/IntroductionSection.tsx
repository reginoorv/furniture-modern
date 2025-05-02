import { useEffect, useRef } from "react";

export default function IntroductionSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section id="studio" className="section-spacing section-padding bg-neutral relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-wood-light opacity-5 rounded-full"></div>
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-wood opacity-5 rounded-full"></div>
      
      <div className="max-w-4xl relative z-10">
        <h2 
          ref={titleRef}
          className="text-2xl md:text-3xl font-medium mb-8 opacity-0 translate-y-8 transition-all duration-700"
        >
          Desain interior - bukan sekadar estetika, tetapi juga penciptaan ruang 
          <span className="text-wood-light"> fungsional dan nyaman</span> untuk kehidupan
        </h2>
        
        <div 
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-10 opacity-0 translate-y-8 transition-all duration-700 delay-200"
        >
          <div className="space-y-6">
            <p className="text-text">
              Tim studio kami mengembangkan pendekatan khusus dalam menciptakan desain interior yang memenuhi kebutuhan klien dan menerapkan teknologi modern.
            </p>
            <p className="text-text">
              Kami menyatukan pengalaman desain dan keahlian teknis untuk memastikan bahwa setiap elemen dalam proyek Anda dipikirkan secara detail dan diimplementasikan secara sempurna.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-text">
              Pendekatan kami mengutamakan fungsionalitas tanpa mengorbankan keindahan estetika sehingga klien mendapatkan ruang yang unik namun praktis untuk kehidupan sehari-hari.
            </p>
            <p className="text-text">
              Untuk setiap proyek, kami memberikan perhatian khusus pada pencahayaan, pemilihan material, dan tata letak agar menciptakan harmoni dalam setiap ruang yang kami desain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
