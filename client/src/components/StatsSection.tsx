import { ArrowRight } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 border-t border-b border-neutral-gray">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-medium mb-2">&gt;250</h3>
          <p className="text-sm text-text">Proyek diselesaikan</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-medium mb-2">57</h3>
          <p className="text-sm text-text">Proyek diselesaikan tahun ini</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-medium mb-2">8</h3>
          <p className="text-sm text-text">Tahun pengalaman kerja</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-medium mb-2">121</h3>
          <p className="text-sm text-text">Desain ruang komersial</p>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <a href="#studio" className="inline-flex items-center text-sm hover-arrow">
          <span>Tentang studio lainnya</span>
          <ArrowRight className="ml-2 w-4 h-4 arrow" />
        </a>
      </div>
    </section>
  );
}
