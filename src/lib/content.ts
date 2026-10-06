// Konfigurasi utama konten portofolio Ibnu Anjang
// Fokus: Mobile (Flutter) & Backend (Python / FastAPI) & System Security

export type Service = {
  name: string;
  description: string;
  priceText: string;
};

export type CaseStudy = {
  problem: string;
  challenge: string;
  solution: string;
  impact: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  link?: string;
  githubUrl?: string;
  imageUrl?: string;
  isLive?: boolean;
  caseStudy?: CaseStudy;
};

export type Achievement = {
  metric: string;
  label: string;
};

export type Testimonial = {
  author: string;
  role: string;
  quote: string;
};

export type AboutHighlight = {
  title: string;
  description: string;
};

export type AboutData = {
  subtitle: string;
  story: string[];
  highlights: AboutHighlight[];
  status: {
    location: string;
    availability: string;
    specialty: string;
  };
};

export const aboutData: AboutData = {
  subtitle: "Fokus pada performa aplikasi mobile Flutter, keandalan backend Python, dan ketahanan arsitektur sistem.",
  story: [
    "Saya adalah Mobile & Backend Developer yang memadukan ekosistem Flutter untuk aplikasi mobile multiplatform dengan Python (FastAPI) untuk backend REST API berkinerja tinggi.",
    "Bagi saya, membangun aplikasi bukan sekadar membuat tampilan berjalan, tetapi memastikan arsitektur di baliknya kokoh: mulai dari validasi skema data, efisiensi query database relasional (PostgreSQL, MariaDB), containerization Docker, hingga penanganan celah keamanan pada alur autentikasi dan otorisasi.",
    "Selain mobile dan backend, saya juga memiliki pengalaman mengintegrasikan hardware IoT (RFID berbasis ESP32) serta membangun aplikasi web modern (Next.js), sehingga memahami alur data menyeluruh dari client, server, hingga infrastruktur.",
  ],
  highlights: [
    {
      title: "Mobile Flutter Multiplatform",
      description:
        "Membangun aplikasi Android & iOS dengan Flutter dan Riverpod yang responsif, terstruktur rapi, dan efisien dalam pengelolaan state.",
    },
    {
      title: "Backend Python & FastAPI",
      description:
        "Merancang REST API cepat dengan validasi data Pydantic, dokumentasi OpenAPI otomatis, dan struktur database relasional yang bersih.",
    },
    {
      title: "Keamanan Sistem & Docker",
      description:
        "Menerapkan isolasi container Docker, konfigurasi network tunnel, otentikasi token JWT yang aman, dan proteksi hak akses data (RLS).",
    },
  ],
  status: {
    location: "Indonesia",
    availability: "Tersedia untuk project baru",
    specialty: "Flutter, Python (FastAPI) & Security",
  },
};

export const site = {
  name: "Ibnu Anjang",
  role: "Mobile & Backend Developer",
  tagline: "Membangun aplikasi mobile Flutter, REST API Python terstruktur, dan arsitektur sistem yang aman.",
  taglineAccent: "aman, cepat, dan andal",
  about:
    "Saya berfokus pada pengembangan aplikasi mobile multiplatform dengan Flutter dan backend API berbasis Python (FastAPI). Terbiasa menangani skema database relasional (PostgreSQL, MariaDB), containerization dengan Docker, serta memperhatikan keamanan sistem data seperti otentikasi aman, Row Level Security, dan proteksi endpoint.",
  email: "ibnumaulidi08@gmail.com",
  avatarUrl: "/avatar.jpg",
  whatsapp: "6285179940204",
  github: "https://github.com/ibnu-anjang",
  linkedin: "", // Kosongkan dulu sampai profil LinkedIn siap; tidak akan muncul sebagai link mati
  cvUrl: "", // Kosongkan dulu sampai file CV siap; tidak akan muncul sebagai link mati
  instagram: "",
};

export const waConsultHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  `Halo ${site.name}, saya ingin berdiskusi mengenai project aplikasi mobile atau backend.`,
)}`;

// Skill dan tool utama yang muncul di Tech Stack marquee
export const skills = [
  "Flutter",
  "Dart",
  "Python",
  "FastAPI",
  "Docker",
  "Riverpod",
  "PostgreSQL",
  "MariaDB",
  "Supabase",
  "Firebase",
  "Linux / Security",
  "Cloudflare",
  "Next.js",
  "TypeScript",
  "Git",
];

export const services: Service[] = [
  {
    name: "Mobile App Development",
    description:
      "Pengembangan aplikasi mobile multiplatform Android & iOS menggunakan Flutter dan Dart. Menerapkan manajemen state Riverpod, caching lokal, integrasi REST API, dan antarmuka responsif sesuai standar Material Design.",
    priceText: "Konsultasi Estimasi Gratis · Sesuai Scope",
  },
  {
    name: "Backend API & Data Architecture",
    description:
      "Pembangunan REST API berkinerja tinggi menggunakan Python (FastAPI). Perancangan skema database relasional (PostgreSQL, MariaDB), validasi skema data ketat dengan Pydantic, dan integrasi model AI/LLM lokal.",
    priceText: "Konsultasi Estimasi Gratis · Sesuai Scope",
  },
  {
    name: "System Security & Containerization",
    description:
      "Penerapan containerization Docker untuk isolasi aplikasi, konfigurasi Cloudflare Tunnel dan reverse proxy, proteksi otentikasi token JWT, audit keamanan endpoint dasar, serta Row Level Security (RLS).",
    priceText: "Konsultasi Estimasi Gratis · Sesuai Scope",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Diskusi Masalah & Kebutuhan Sistem",
    description:
      "Membahas alur kerja aplikasi, spesifikasi endpoint API, skema data, dan batasan teknis secara transparan sebelum mulai coding.",
  },
  {
    title: "Perancangan Arsitektur & Lingkungan",
    description:
      "Menyusun skema database, struktur modular proyek (Flutter/FastAPI), serta konfigurasi container Docker agar lingkungan kerja konsisten.",
  },
  {
    title: "Pengembangan Bertahap & Validasi",
    description:
      "Menulis kode bersih dengan penanganan error yang jelas, pengujian integrasi API, dan pembaruan progres rutin.",
  },
  {
    title: "Deployment, Pengamanan & Serah Terima",
    description:
      "Uji fungsionalitas menyeluruh, konfigurasi environment produksi yang aman, serta penyerahan repositori kode lengkap tanpa biaya tersembunyi.",
  },
];

// Project nyata dari GitHub ibnu-anjang yang merefleksikan spesialisasi Flutter, Python, dan Security
export const projects: Project[] = [
  {
    title: "Shoes Store",
    category: "Full-Stack Mobile App & AI",
    description:
      "Aplikasi e-commerce mobile end-to-end yang mengintegrasikan frontend Flutter dengan backend Python (FastAPI), database MariaDB dalam Docker, serta asisten chatbot AI lokal (Ollama).",
    stack: ["Flutter", "FastAPI", "Python", "MariaDB", "Docker", "Ollama"],
    link: "https://github.com/ibnu-anjang/shoes_store",
    githubUrl: "https://github.com/ibnu-anjang/shoes_store",
    imageUrl: "",
    isLive: false,
    caseStudy: {
      problem:
        "Membangun aplikasi mobile e-commerce mandiri membutuhkan alur transaksi katalog yang cepat, manajemen status pesanan terstruktur, dan asisten produk tanpa bergantung pada API AI pihak ketiga berbiaya langganan tinggi.",
      challenge:
        "Menghubungkan aplikasi mobile Flutter dengan backend lokal yang berjalan di container Docker, serta mengintegrasikan model LLM lokal agar respons tanya jawab produk tetap cepat di jaringan lokal.",
      solution:
        "Membangun REST API modular dengan FastAPI, mengelola lifecycle pesanan (UNPAID ke COMPLETED) di MariaDB, mengemas seluruh sistem backend dengan Docker Compose, dan memanfaatkan Ollama (model qwen2.5) untuk asisten belanja interaktif.",
      impact:
        "Solusi fullstack mandiri yang siap di-deploy secara portabel dengan Docker dan dapat diakses publik secara aman via Cloudflare Tunnel.",
    },
  },
  {
    title: "ClearFix",
    category: "Backend Platform & Facility Management",
    description:
      "Platform backend pelaporan dan manajemen fasilitas sekolah yang menghubungkan pelapor dengan petugas lewat alur verifikasi bertingkat dan audit log yang aman.",
    stack: ["FastAPI", "Python", "Supabase", "PostgreSQL", "Docker"],
    link: "https://github.com/ibnu-anjang/ClearFix",
    githubUrl: "https://github.com/ibnu-anjang/ClearFix",
    imageUrl: "",
    isLive: false,
    caseStudy: {
      problem:
        "Pelaporan kerusakan fasilitas di lingkungan sekolah sering kali tidak terdokumentasi rapi, tanpa riwayat status penanganan yang jelas, dan rawan laporan palsu.",
      challenge:
        "Merancang skema database yang mendukung alur validasi tiket bertingkat dengan hak akses pengguna yang terisolasi aman antara pelapor dan frontliner.",
      solution:
        "Membangun REST API menggunakan FastAPI dan PostgreSQL (Supabase) dengan kontrol otorisasi berbasis peran (Role-Based Access Control) dan container Docker untuk kemudahan deployment.",
      impact:
        "Alur pelaporan fasilitas sekolah terdokumentasi transparan dengan status verifikasi terstruktur dan log aktivitas yang tercatat rapi.",
    },
  },
  {
    title: "FinTrack",
    category: "Mobile Accounting App",
    description:
      "Aplikasi mobile pencatatan keuangan double-entry dengan Chart of Accounts (CoA), jurnal transaksi debit-kredit otomatis, dan dukungan multi-workspace berbasis Flutter.",
    stack: ["Flutter", "Dart", "Firebase", "Riverpod"],
    link: "https://github.com/ibnu-anjang/FinTrack",
    githubUrl: "https://github.com/ibnu-anjang/FinTrack",
    imageUrl: "",
    isLive: false,
    caseStudy: {
      problem:
        "Banyak aplikasi pencatatan keuangan personal atau kas kecil hanya mencatat arus kas satu arah, sehingga tidak akurat untuk melacak aset, liabilitas, dan ekuitas yang sebenarnya.",
      challenge:
        "Mengimplementasikan aturan akuntansi berpasangan (keseimbangan debit dan kredit) dan multi-workspace di perangkat mobile dengan pembaruan state yang reaktif dan bebas inkonsistensi.",
      solution:
        "Menggunakan Flutter dengan state management Riverpod dan model data Freezed untuk menjamin immutability state. Sinkronisasi data real-time dengan Firebase Firestore.",
      impact:
        "Pengguna dapat mengelola pembukuan formal dengan bagan akun standar langsung dari smartphone dengan validasi keseimbangan debit-kredit otomatis.",
    },
  },
  {
    title: "NBPay",
    category: "IoT & Digital Payment POS",
    description:
      "Sistem pembayaran digital kantin sekolah berbasis kartu RFID dan microcontroller ESP32 yang terhubung ke aplikasi mobile Flutter untuk admin, penjual, dan siswa.",
    stack: ["Flutter", "Dart", "Firebase", "ESP32", "IoT"],
    link: "https://github.com/ibnu-anjang/NBPay",
    githubUrl: "https://github.com/ibnu-anjang/NBPay",
    imageUrl: "",
    isLive: false,
    caseStudy: {
      problem:
        "Transaksi tunai di kantin sekolah rawan kehilangan uang fisik, antrean lama saat jam istirahat, dan kurangnya rekapitulasi penjualan harian bagi pihak sekolah dan mitra kantin.",
      challenge:
        "Mengintegrasikan pembaca kartu fisik RFID pada modul hardware ESP32 dengan sistem database cloud dan aplikasi mobile secara aman serta berlatensi rendah.",
      solution:
        "Mengembangkan aplikasi mobile Flutter untuk tiga peran (admin, penjual, siswa) yang tersinkronisasi via Firebase, dipadukan dengan firmware ESP32 untuk pemindaian kartu RFID instan.",
      impact:
        "Proses transaksi kantin berjalan tanpa uang tunai dengan verifikasi saldo kartu secara instan dan pencatatan transaksi yang transparan.",
    },
  },
  {
    title: "Trading Jurnal",
    category: "Fullstack Web Analytics",
    description:
      "Platform pencatatan dan evaluasi trading harian otomatis untuk trader independen, menggantikan spreadsheet manual dengan analitik visual real-time.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    link: "https://trading-jurnal-five.vercel.app",
    githubUrl: "https://github.com/ibnu-anjang/Trading-Jurnal",
    imageUrl: "/projects/trading-jurnal.webp",
    isLive: true,
    caseStudy: {
      problem:
        "Trader pemula kesulitan mengevaluasi konsistensi dan emosi trading harian karena pencatatan manual di spreadsheet membingungkan, lambat, dan rawan salah formula.",
      challenge:
        "Menyediakan kalkulasi analitik real-time (Winrate, Profit Factor, Risk-to-Reward) dan grafik pertumbuhan modal (equity curve), sembari mengamankan data transaksi tiap trader agar terisolasi sempurna.",
      solution:
        "Membangun frontend dengan Next.js App Router dan TypeScript untuk komputasi di sisi browser, dipadukan dengan Supabase (PostgreSQL) serta Row Level Security (RLS) untuk isolasi data pengguna yang aman.",
      impact:
        "Live di Vercel. Trader bisa mencatat transaksi lalu langsung melihat winrate, profit factor, dan equity curve tanpa repot mengelola rumus spreadsheet.",
    },
  },
  {
    title: "GAMES-HUB",
    category: "Interactive Web Portal",
    description:
      "Portal kumpulan game web modern yang dapat langsung dimainkan instan di browser mobile maupun desktop tanpa instalasi dan bebas iklan yang mengganggu.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://games-hub-beryl-nine.vercel.app",
    githubUrl: "https://github.com/ibnu-anjang/GAMES-HUB",
    imageUrl: "/projects/games-hub.webp",
    isLive: true,
    caseStudy: {
      problem:
        "Sebagian besar situs mini-game web dipenuhi iklan pop-up berat dan tampilan yang sering lambat saat diakses lewat layar smartphone.",
      challenge:
        "Mengoptimasi rendering game berbasis canvas & web di Next.js dan Tailwind agar responsif di seluruh variasi ukuran layar HP dengan latensi input yang minim.",
      solution:
        "Menerapkan arsitektur komponen React modular dengan isolasi loop game per komponen, pengoptimalan gambar aset ke format WebP terkompresi, dan navigasi antar halaman via Turbopack.",
      impact:
        "Live di Vercel dan bisa dimainkan langsung di browser HP maupun desktop tanpa instalasi, dengan navigasi sentuh dan kontrol keyboard.",
    },
  },
];

// Data pencapaian: hanya tampil jika ada metrik nyata
export const achievements: Achievement[] = [];

// Testimoni: hanya diisi saat sudah ada ulasan asli dari klien nyata
export const testimonials: Testimonial[] = [];
