import { db } from "./index";
import { projects, services } from "@shared/schema";

async function seed() {
  try {
    console.log("Seeding projects...");
    
    // Check if projects already exist
    const existingProjects = await db.query.projects.findMany();
    if (existingProjects.length === 0) {
      // Add projects
      await db.insert(projects).values([
        {
          title: "Desain dapur",
          slug: "desain-dapur",
          description: "Desain dapur modern dengan aksen kayu yang memberikan kesan hangat dan nyaman.",
          image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Desain rumah di Jakarta",
          slug: "desain-rumah-jakarta",
          description: "Desain rumah minimalis namun elegan di Jakarta dengan fokus pada ruang terbuka dan pencahayaan alami.",
          image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Detail ruang makan kombinasi dengan dapur",
          slug: "detail-ruang-makan",
          description: "Kombinasi ruang makan dan dapur yang menyatu dengan sempurna untuk keluarga modern.",
          image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          title: "Desain apartemen di Jakarta",
          slug: "desain-apartemen-jakarta",
          description: "Desain apartemen kompak namun fungsional di Jakarta dengan sentuhan elegansi.",
          image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]);
      console.log("Projects seeded successfully!");
    } else {
      console.log("Projects already exist, skipping seed.");
    }

    // Check if services already exist
    const existingServices = await db.query.services.findMany();
    if (existingServices.length === 0) {
      console.log("Seeding services...");
      // Add services
      await db.insert(services).values([
        {
          title: "Perencanaan",
          slug: "perencanaan",
          description: "Membuat perencanaan teknis-desain proyek interior berdasarkan pengukuran ruangan, penempatan objek komunikasi, pengembangan konsep warna dan tekstur, pemilihan material dan penyelesaian pekerjaan di lokasi.",
          image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Perlengkapan",
          slug: "perlengkapan",
          description: "Perlengkapan proyek dari awal hingga akhir. Tim kami bekerja dengan tekstil, furnitur, pencahayaan, peralatan rumah tangga, pemanas dan penyejuk udara, material dan perlengkapan mandi. Kami memilih dengan cermat produk yang memenuhi persyaratan kualitas.",
          image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        },
        {
          title: "Proyek Desain",
          slug: "proyek-desain",
          description: "Membuat dokumen terperinci dan komprehensif dengan visualisasi fotorealistik untuk implementasi desain interior Anda. Desain proyek mencakup semua gambar teknis, pilihan material, furnitur dan pencahayaan berdasarkan preferensi individual.",
          image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
        }
      ]);
      console.log("Services seeded successfully!");
    } else {
      console.log("Services already exist, skipping seed.");
    }

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

seed();
