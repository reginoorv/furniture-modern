import { IMAGES } from "@/assets/images";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  image: string;
  slug: string;
  description?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Desain dapur",
    image: IMAGES.projects.kitchen,
    slug: "desain-dapur",
    description: "Desain dapur modern dengan aksen kayu yang memberikan kesan hangat dan nyaman."
  },
  {
    id: 2,
    title: "Desain rumah di Jakarta",
    image: IMAGES.projects.houseBandung,
    slug: "desain-rumah-jakarta",
    description: "Desain rumah minimalis namun elegan di Jakarta dengan fokus pada ruang terbuka dan pencahayaan alami."
  },
  {
    id: 3,
    title: "Detail ruang makan kombinasi dengan dapur",
    image: IMAGES.projects.diningRoom,
    slug: "detail-ruang-makan",
    description: "Kombinasi ruang makan dan dapur yang menyatu dengan sempurna untuk keluarga modern."
  },
  {
    id: 4,
    title: "Desain apartemen di Jakarta",
    image: IMAGES.projects.apartment,
    slug: "desain-apartemen-jakarta",
    description: "Desain apartemen kompak namun fungsional di Jakarta dengan sentuhan elegansi."
  }
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
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
            }, index * 150); // Staggered delay based on index
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
      className="group opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <a 
        href={`#${project.slug}`} 
        className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 image-scale"
      >
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 sm:h-80 object-cover"
          loading="lazy"
        />
      </a>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium group-hover:text-wood-light transition-colors duration-300">
            {project.title}
          </h3>
          {project.description && (
            <p className="text-text text-sm mt-2 line-clamp-2">{project.description}</p>
          )}
        </div>
        <a 
          href={`#${project.slug}`} 
          className="flex items-center text-sm p-2 group"
          aria-label={`Lihat detail ${project.title}`}
        >
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-wood-light" />
        </a>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (linkRef.current) {
      observer.observe(linkRef.current);
    }

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (linkRef.current) observer.unobserve(linkRef.current);
    };
  }, []);

  return (
    <section id="projects" className="section-spacing section-padding relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-neutral opacity-50 -z-10 rounded-bl-3xl"></div>
      
      <h2 
        ref={titleRef}
        className="text-2xl md:text-3xl font-medium mb-12 opacity-0 translate-y-8 transition-all duration-700"
      >
        Proyek <span className="text-wood-light">kami</span>
      </h2>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
      
      <div 
        ref={linkRef}
        className="flex justify-end mt-10 opacity-0 transition-all duration-500"
      >
        <a 
          href="#" 
          className="inline-flex items-center text-sm group px-4 py-2 border border-neutral-gray rounded-full hover:bg-neutral-light transition-all duration-300"
        >
          <span className="group-hover:text-wood-light transition-colors">Lihat semua proyek</span>
          <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-wood-light" />
        </a>
      </div>
    </section>
  );
}
