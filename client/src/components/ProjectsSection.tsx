import { IMAGES } from "@/assets/images";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Desain dapur",
    image: IMAGES.projects.kitchen,
    slug: "desain-dapur"
  },
  {
    id: 2,
    title: "Desain rumah di Jakarta",
    image: IMAGES.projects.houseBandung,
    slug: "desain-rumah-jakarta"
  },
  {
    id: 3,
    title: "Detail ruang makan kombinasi dengan dapur",
    image: IMAGES.projects.diningRoom,
    slug: "detail-ruang-makan"
  },
  {
    id: 4,
    title: "Desain apartemen di Jakarta",
    image: IMAGES.projects.apartment,
    slug: "desain-apartemen-jakarta"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <h2 className="text-2xl md:text-3xl font-medium mb-12">Proyek kami</h2>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <a href={`#${project.slug}`} className="block overflow-hidden rounded-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <div className="mt-4 flex justify-between items-center">
              <h3 className="text-lg font-medium">{project.title}</h3>
              <a href={`#${project.slug}`} className="flex items-center text-sm hover-arrow">
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-end mt-8">
        <a href="#" className="inline-flex items-center text-sm hover-arrow">
          <span>Lihat semua proyek</span>
          <ArrowRight className="ml-2 w-4 h-4 arrow" />
        </a>
      </div>
    </section>
  );
}
