import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
}

function StatItem({ number, label, delay }: StatItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100");
              entry.target.classList.remove("opacity-0");
              entry.target.classList.remove("translate-y-4");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) observer.unobserve(itemRef.current);
    };
  }, [delay]);

  return (
    <div 
      ref={itemRef}
      className="text-center md:text-left opacity-0 translate-y-4 transition-all duration-700 ease-out"
    >
      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-2 text-wood-dark">{number}</h3>
      <p className="text-sm text-text">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const linkRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("opacity-100");
              entry.target.classList.remove("opacity-0");
            }, 600);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (linkRef.current) {
      observer.observe(linkRef.current);
    }

    return () => {
      if (linkRef.current) observer.unobserve(linkRef.current);
    };
  }, []);

  return (
    <section className="section-padding py-14 sm:py-16 md:py-20 lg:py-24 border-t border-b border-neutral-gray">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        <StatItem number="&gt;250" label="Proyek diselesaikan" delay={100} />
        <StatItem number="57" label="Proyek diselesaikan tahun ini" delay={200} />
        <StatItem number="8" label="Tahun pengalaman kerja" delay={300} />
        <StatItem number="121" label="Desain ruang komersial" delay={400} />
      </div>
      
      <div 
        ref={linkRef}
        className="flex justify-end mt-8 opacity-0 transition-all duration-500"
      >
        <a 
          href="#studio" 
          className="inline-flex items-center text-sm group"
        >
          <span className="group-hover:text-wood-light transition-colors">Tentang studio lainnya</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-wood-light" />
        </a>
      </div>
    </section>
  );
}
