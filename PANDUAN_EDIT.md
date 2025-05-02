# Panduan Mengedit Website FURNITURE MODERN

Panduan ini berisi instruksi langkah demi langkah untuk mengedit berbagai bagian dari website FURNITURE MODERN. Panduan ini ditujukan untuk pengguna yang memiliki pemahaman dasar tentang HTML, CSS, dan JavaScript.

## Daftar Isi
1. [Struktur Proyek](#struktur-proyek)
2. [Mengedit Konten Utama](#mengedit-konten-utama)
3. [Mengedit Layanan](#mengedit-layanan)
4. [Mengedit Halaman Detail Layanan](#mengedit-halaman-detail-layanan)
5. [Mengedit Proyek](#mengedit-proyek)
6. [Mengubah Gambar](#mengubah-gambar)
7. [Mengedit Warna dan Tampilan](#mengedit-warna-dan-tampilan)
8. [Mengedit SEO dan Metadata](#mengedit-seo-dan-metadata)
9. [Menambahkan Halaman Baru](#menambahkan-halaman-baru)

## Struktur Proyek

Berikut adalah struktur file utama yang perlu Anda ketahui:

```
├── client/
│   ├── src/
│   │   ├── assets/           # Gambar dan aset lainnya
│   │   ├── components/       # Komponen UI website
│   │   ├── pages/            # Halaman-halaman website
│   │   ├── App.tsx           # File utama aplikasi
│   │   └── index.css         # CSS global
│   └── index.html            # File HTML utama dan metadata
├── server/                   # Kode server dan API
└── shared/                   # Skema database
```

## Mengedit Konten Utama

### Mengedit Header dan Navigation

Untuk mengedit header dan navigasi website:

1. Buka file `client/src/components/Header.tsx`
2. Untuk mengubah logo atau nama brand, cari bagian berikut:
   ```jsx
   <div className="logo font-semibold tracking-wide text-lg md:text-xl relative z-20">
     <Link href="/" className="text-text-dark hover:text-wood-light transition-colors">
       FURNITURE MODERN
     </Link>
   </div>
   ```

3. Untuk mengubah menu navigasi, cari dan edit bagian:
   ```jsx
   <nav className="hidden md:flex space-x-8 text-sm">
     <a href="#studio" className="hover:text-wood-light transition-colors relative...">
       Tentang Studio
     </a>
     <!-- Item menu lainnya -->
   </nav>
   ```

### Mengedit Hero Section

Untuk mengedit bagian hero (banner utama):

1. Buka file `client/src/components/HeroSection.tsx`
2. Untuk mengubah judul utama, edit bagian:
   ```jsx
   <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight hero-text">
     Menciptakan desain yang berbicara tentang <span className="text-wood-light">Anda</span> dan untuk <span className="text-wood-light">Anda</span>
   </h1>
   ```

3. Untuk mengubah deskripsi, edit paragraf setelah heading.
4. Untuk mengubah gambar hero, temukan bagian:
   ```jsx
   <img 
     src={IMAGES.hero} 
     alt="Dapur modern dengan aksen kayu" 
     className="w-full h-auto object-cover rounded-lg shadow-xl" 
     loading="eager"
   />
   ```

### Mengedit Footer

Untuk mengedit footer website:

1. Buka file `client/src/components/Footer.tsx`
2. Untuk mengubah informasi kontak, cari bagian:
   ```jsx
   <h3 className="text-lg font-medium mb-4 text-wood">FURNITURE MODERN</h3>
   ```
3. Edit alamat, email, dan detail kontak lainnya sesuai kebutuhan.

## Mengedit Layanan

### Mengubah Daftar Layanan

Untuk mengedit daftar layanan yang ditampilkan di halaman utama:

1. Buka file `client/src/components/ServicesSection.tsx`
2. Cari variabel `services` di awal file:
   ```jsx
   const services: Service[] = [
     {
       id: 1,
       title: "Perencanaan",
       description: "Membuat perencanaan teknis-desain proyek interior...",
       image: IMAGES.services.planning,
       slug: "perencanaan"
     },
     // Layanan lainnya
   ];
   ```
3. Edit atau tambahkan layanan sesuai kebutuhan. Pastikan setiap layanan memiliki:
   - `id`: Nomor unik
   - `title`: Judul layanan
   - `description`: Deskripsi singkat
   - `image`: Referensi ke gambar (perhatikan juga file `client/src/assets/images.ts`)
   - `slug`: URL ramah yang digunakan untuk halaman detail (hindari spasi dan karakter khusus)

## Mengedit Halaman Detail Layanan

Untuk mengedit detail dari setiap layanan:

1. Buka file `client/src/pages/ServiceDetail.tsx`
2. Cari object `serviceDetails` di awal file:
   ```jsx
   const serviceDetails = {
     "perencanaan": {
       title: "Perencanaan",
       heroImage: IMAGES.services.planning,
       description: "...",
       longDescription: ["...", "...", "..."],
       features: ["...", "...", "..."],
       gallery: ["...", "...", "..."]
     },
     // Detail layanan lainnya
   };
   ```
3. Edit konten untuk setiap layanan. Perhatikan struktur data:
   - `title`: Judul layanan
   - `heroImage`: Gambar header
   - `description`: Deskripsi singkat
   - `longDescription`: Array paragraf untuk deskripsi panjang
   - `features`: Array fitur atau poin penting
   - `gallery`: Array URL gambar untuk galeri

4. Jika Anda menambahkan layanan baru di `ServicesSection.tsx`, pastikan untuk menambahkan detail layanan tersebut di sini juga dengan slug yang sama.

## Mengedit Proyek

Untuk mengedit proyek yang ditampilkan:

1. Buka file `client/src/components/ProjectsSection.tsx`
2. Cari variabel `projects` di awal file:
   ```jsx
   const projects = [
     {
       id: 1,
       title: "Apartemen Minimalis",
       image: "URL_GAMBAR",
       slug: "apartemen-minimalis",
       description: "Desain interior apartemen dengan konsep minimalis..."
     },
     // Proyek lainnya
   ];
   ```
3. Edit atau tambahkan proyek sesuai kebutuhan. Pastikan setiap proyek memiliki ID unik, judul, gambar, dan slug yang sesuai.

## Mengubah Gambar

### Mengganti Gambar Layanan, Proyek atau Hero

1. Untuk mengganti gambar, pertama-tama siapkan gambar baru dan letakkan di folder assets:
   - Simpan gambar di folder `client/src/assets/`

2. Buka file `client/src/assets/images.ts`
3. Update path gambar sesuai kebutuhan:
   ```jsx
   export const IMAGES = {
     hero: "/path/to/new/hero.jpg",
     services: {
       planning: "/path/to/new/planning.jpg",
       // Gambar layanan lainnya
     },
     // Gambar lainnya
   };
   ```

### Mengganti Favicon

Untuk mengganti favicon website:

1. Siapkan file favicon baru dalam format SVG, PNG, dan ICO
2. Letakkan file tersebut di folder `client/public/`
3. Pastikan nama file sesuai: `favicon.svg`, `favicon.png`, dan `favicon.ico`

## Mengedit Warna dan Tampilan

### Mengubah Skema Warna

Untuk mengubah skema warna website:

1. Buka file `tailwind.config.ts`
2. Cari bagian `colors` di dalam objek `theme.extend`:
   ```js
   colors: {
     wood: {
       DEFAULT: '#B76E3A',
       light: '#D4915A',
       dark: '#8E4E1E',
     },
     text: {
       DEFAULT: '#333333',
       light: '#666666',
       dark: '#111111',
     },
     // Warna lainnya
   }
   ```
3. Edit kode warna sesuai kebutuhan (format HEX, RGB, atau HSL)

### Mengubah Font

Untuk mengubah jenis font:

1. Buka file `tailwind.config.ts`
2. Cari bagian `fontFamily` di dalam objek `theme.extend`:
   ```js
   fontFamily: {
     sans: ['Inter', 'sans-serif'],
     // Font lainnya
   }
   ```
3. Ganti dengan font yang diinginkan
4. Buka file `client/src/index.css` dan pastikan font diimpor dengan benar:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
   ```

## Mengedit SEO dan Metadata

### Mengubah Judul dan Deskripsi Website

1. Buka file `client/index.html`
2. Edit tag title dan meta description:
   ```html
   <title>FURNITURE MODERN - Studio Desain Interior Profesional di Indonesia</title>
   <meta name="description" content="Studio desain interior yang fokus pada kenyamanan, keindahan, dan fungsionalitas..." />
   ```

### Mengubah Metadata SEO

1. Buka file `client/index.html`
2. Edit metadata SEO lainnya:
   ```html
   <!-- SEO Meta Tags -->
   <meta name="keywords" content="desain interior, furniture modern, studio interior..." />
   <meta name="author" content="FURNITURE MODERN Interior Studio" />
   ```

3. Edit tag Open Graph dan Twitter Card untuk peningkatan tampilan di media sosial:
   ```html
   <!-- Open Graph Meta Tags for Social Media -->
   <meta property="og:title" content="..." />
   <meta property="og:description" content="..." />
   ```

### Mengubah Data Terstruktur Schema.org

1. Buka file `client/index.html`
2. Cari dan edit bagian JSON-LD di bagian bawah file:
   ```html
   <script type="application/ld+json">
     {
       "@context": "https://schema.org",
       "@type": "ProfessionalService",
       "name": "FURNITURE MODERN",
       // Data lainnya
     }
   </script>
   ```

## Menambahkan Halaman Baru

Untuk menambahkan halaman baru ke website:

1. Buat file komponen halaman baru di `client/src/pages/`, contoh: `NewPage.tsx`
2. Implementasikan komponen halaman dengan struktur dasar:
   ```jsx
   import React from 'react';
   import Header from '@/components/Header';
   import Footer from '@/components/Footer';

   export default function NewPage() {
     return (
       <div className="min-h-screen flex flex-col">
         <Header />
         <main className="flex-grow section-padding pt-32 pb-16">
           {/* Konten halaman */}
           <h1>Judul Halaman Baru</h1>
         </main>
         <Footer />
       </div>
     );
   }
   ```

3. Daftarkan halaman baru di router aplikasi. Buka `client/src/App.tsx`:
   ```jsx
   import NewPage from '@/pages/NewPage';

   function Router() {
     return (
       <Switch>
         <Route path="/" component={Home}/>
         <Route path="/halaman-baru" component={NewPage}/>
         {/* Rute lainnya */}
         <Route component={NotFound} />
       </Switch>
     );
   }
   ```

4. Tambahkan link ke halaman baru di navigasi jika diperlukan (di `Header.tsx`)

## Tips dan Praktik Terbaik

- Selalu test perubahan di lingkungan lokal sebelum deploy
- Gunakan nama kelas yang konsisten untuk menjaga konsistensi desain
- Pastikan gambar dioptimasi untuk web (ukuran file yang kecil)
- Pastikan responsivitas website tetap terjaga setelah melakukan perubahan
- Gunakan branch terpisah di Git saat melakukan perubahan besar
- Dokumentasikan perubahan yang Anda buat untuk referensi di masa depan