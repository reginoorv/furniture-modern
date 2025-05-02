# Panduan Deploy Website FURNITURE MODERN

Panduan ini berisi langkah-langkah untuk melakukan deploy website FURNITURE MODERN secara manual ke Netlify dan Vercel. Panduan ini mencakup proses dari awal instalasi modul hingga push ke GitHub dan deploy ke platform hosting.

## Daftar Isi
1. [Persiapan Awal](#persiapan-awal)
2. [Instalasi Modul dan Dependensi](#instalasi-modul-dan-dependensi)
3. [Push ke GitHub](#push-ke-github)
4. [Deploy ke Netlify](#deploy-ke-netlify)
5. [Deploy ke Vercel](#deploy-ke-vercel)
6. [Pengaturan Custom Domain](#pengaturan-custom-domain)

## Persiapan Awal

### 1. Instalasi Tools yang Dibutuhkan

Pastikan komputer Anda sudah terinstal dengan tools berikut:

- **Node.js** (versi 18 atau lebih baru)
- **npm** (biasanya terinstal bersama Node.js)
- **Git**

Untuk memastikan tools sudah terinstal dengan benar, gunakan perintah berikut di terminal:

```bash
node -v
npm -v
git --version
```

### 2. Membuat Akun GitHub, Netlify dan Vercel

Jika Anda belum memiliki akun, buat akun di:
- GitHub: https://github.com/join
- Netlify: https://app.netlify.com/signup
- Vercel: https://vercel.com/signup

## Instalasi Modul dan Dependensi

### 1. Clone Repository dari Replit

Jika website FURNITURE MODERN sudah ada di GitHub:

```bash
git clone https://github.com/username/furniture-modern.git
cd furniture-modern
```

Jika belum ada di GitHub dan Anda ingin mendownload dari Replit:
- Klik tombol "Download as zip" di Replit
- Ekstrak file zip tersebut
- Buka folder hasil ekstraksi melalui terminal

### 2. Instalasi Dependensi

Setelah masuk ke direktori proyek, lakukan instalasi semua dependensi:

```bash
# Instalasi semua dependensi yang dibutuhkan
npm install
```

### 3. Testing di Local Environment

Sebelum melakukan deployment, pastikan website dapat berjalan dengan baik di lingkungan lokal:

```bash
# Jalankan server pengembangan
npm run dev
```

Setelah perintah di atas, Anda dapat membuka browser dan mengakses `http://localhost:5000` untuk melihat website.

## Push ke GitHub

### 1. Membuat Repository di GitHub

- Buka GitHub, login ke akun Anda
- Klik tombol "+" di pojok kanan atas, pilih "New repository"
- Beri nama repository (misalnya "furniture-modern")
- Anda bisa memilih opsi public atau private
- Klik "Create repository"

### 2. Inisialisasi Git dan Push ke GitHub

Jika Anda mendownload dari Replit dan belum terhubung dengan GitHub:

```bash
# Inisialisasi Git di direktori proyek
git init

# Menambahkan semua file ke staging area
git add .

# Commit perubahan
git commit -m "Initial commit untuk website FURNITURE MODERN"

# Menambahkan remote repository
git remote add origin https://github.com/username/furniture-modern.git

# Push ke GitHub
git push -u origin main
```

*Catatan: Jika branch utama Anda bernama "master" bukan "main", ganti "main" dengan "master" pada perintah terakhir.*

## Deploy ke Netlify

### 1. Login dan Setup di Netlify

- Buka [Netlify](https://app.netlify.com/) dan login dengan akun Anda
- Di dasbor Netlify, klik tombol "New site from Git"
- Pilih "GitHub" sebagai penyedia Git
- Berikan akses ke Netlify untuk membaca repository GitHub Anda
- Pilih repository "furniture-modern"

### 2. Konfigurasi Deploy di Netlify

Setelah memilih repository, Anda perlu mengkonfigurasi pengaturan build:

- **Branch to deploy**: main (atau master)
- **Build command**: `npm run build`
- **Publish directory**: `dist` (lokasi output build di Vite)

Kemudian, tambahkan variabel lingkungan yang diperlukan (jika ada):

- Klik "Advanced build settings"
- Tambahkan variabel lingkungan seperti `DATABASE_URL` jika diperlukan

Terakhir, klik "Deploy site" untuk memulai proses deployment.

### 3. Mengecek Status Deploy

- Netlify akan menampilkan progress deployment Anda
- Setelah selesai, Anda akan mendapatkan URL default (misalnya `furniture-modern.netlify.app`)
- Klik URL tersebut untuk mengecek website yang sudah dideploy

## Deploy ke Vercel

### 1. Login dan Setup di Vercel

- Buka [Vercel](https://vercel.com/) dan login dengan akun Anda
- Di dasbor Vercel, klik tombol "New Project"
- Pilih opsi "Import Git Repository"
- Pilih "GitHub" dan berikan akses ke Vercel untuk membaca repository GitHub Anda
- Cari dan pilih repository "furniture-modern"

### 2. Konfigurasi Deploy di Vercel

Setelah memilih repository, Anda perlu mengkonfigurasi pengaturan build:

- **Framework Preset**: Pilih "Vite" dari dropdown
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

Jika proyek Anda membutuhkan variabel lingkungan:
- Anda bisa menambahkannya di bagian "Environment Variables"
- Tambahkan variabel seperti `DATABASE_URL` jika diperlukan

Kemudian klik "Deploy" untuk memulai proses deployment.

### 3. Mengecek Status Deploy

- Vercel akan menampilkan progress deployment Anda
- Setelah selesai, Anda akan mendapatkan URL default (misalnya `furniture-modern.vercel.app`)
- Klik URL tersebut untuk mengecek website yang sudah dideploy

## Pengaturan Custom Domain

### Custom Domain di Netlify

1. Di dasbor Netlify, pilih website Anda
2. Klik tab "Domain management"
3. Klik "Add custom domain"
4. Masukkan nama domain yang Anda miliki (misalnya `furnituremodern.id`)
5. Ikuti instruksi untuk verifikasi kepemilikan domain
6. Perbarui pengaturan DNS di penyedia domain Anda dengan nilai yang disediakan Netlify

### Custom Domain di Vercel

1. Di dasbor Vercel, pilih proyek Anda
2. Klik tab "Settings" lalu pilih "Domains"
3. Masukkan nama domain yang Anda miliki (misalnya `furnituremodern.id`)
4. Ikuti instruksi untuk verifikasi kepemilikan domain
5. Perbarui pengaturan DNS di penyedia domain Anda dengan nilai yang disediakan Vercel

## Troubleshooting

### Masalah Umum saat Deploy

1. **Build gagal**:
   - Periksa log build untuk melihat error spesifik
   - Pastikan semua dependensi terinstall dengan benar
   - Pastikan perintah build bekerja di lingkungan lokal

2. **Routing Error (404)**:
   - Untuk Single Page Application (SPA), Anda mungkin perlu menambahkan file `_redirects` (Netlify) atau `vercel.json` untuk mengatur rewrite rules

3. **Database tidak terhubung**:
   - Pastikan variabel lingkungan sudah diatur dengan benar
   - Pastikan database dapat diakses dari layanan hosting

Untuk bantuan lebih lanjut, Anda dapat memeriksa dokumentasi resmi [Netlify](https://docs.netlify.com/) dan [Vercel](https://vercel.com/docs).