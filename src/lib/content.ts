// ⚠️ SATU-SATUNYA file yang perlu kamu edit untuk mengisi portofolio.
// Ganti semua yang bertanda TODO dengan data ASLI kamu sebelum tunjukin ke client.

export type Service = {
  name: string;
  description: string;
  priceText: string;
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  link?: string;
  imageUrl?: string;
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

export const site = {
  name: "Ibnu Anjang",
  role: "Web & Mobile Developer",
  tagline: "Membangun website & aplikasi yang rapi, cepat, dan siap produksi.",
  taglineAccent: "rapi, cepat",
  about:
    "Saya membantu bisnis dan personal membangun produk digital, mulai dari landing page, web app modern, hingga aplikasi mobile. Fokus utama saya: kode terstruktur, performa cepat, dan hasil yang benar-benar siap pakai.",
  email: "ibnumaulidi08@gmail.com",
  avatarUrl: "/avatar.jpg",
  whatsapp: "6285179940204",
  github: "https://github.com/ibnu-anjang",
  linkedin: "",
  instagram: "",
};

// Skill/tool yang muncul di Tech Stack.
export const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Flutter",
  "Dart",
  "Riverpod",
  "Firebase",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "Docker",
  "Git",
  "Vercel",
];

export const services: Service[] = [
  {
    name: "Web Development",
    description:
      "Landing page, company profile, sampai web app dan dashboard interaktif. Next.js dan Tailwind, cepat, responsif di HP/desktop, dan SEO-ready.",
    priceText: "Mulai dari nego",
  },
  {
    name: "Mobile App (Flutter)",
    description:
      "Aplikasi Android dan iOS dengan Flutter dan Firebase. Autentikasi, database realtime, state management Riverpod, dan siap dipublikasikan.",
    priceText: "Mulai dari nego",
  },
  {
    name: "Backend & Integrasi",
    description:
      "Perancangan database, REST API, integrasi Supabase/Firebase, manajemen environment dengan Docker, serta deployment ke cloud.",
    priceText: "Mulai dari nego",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Konsultasi Kebutuhan",
    description:
      "Ceritakan kebutuhan project Anda via WhatsApp. Kita bahas tujuan, fitur, dan estimasi waktu secara santai dan transparan.",
  },
  {
    title: "Penawaran & Scope",
    description:
      "Saya siapkan rincian fitur, target timeline, dan estimasi biaya yang disepakati bersama sebelum pengerjaan dimulai.",
  },
  {
    title: "Proses Pengerjaan",
    description:
      "Pengembangan dengan update progres berkala. Anda bisa melihat preview live dan memberikan feedback langsung.",
  },
  {
    title: "Peluncuran & Garansi",
    description:
      "Aplikasi dideploy ke production, source code diserahkan penuh, dilengkapi masa garansi untuk memastikan kelancaran sistem.",
  },
];

// Project nyata dari GitHub ibnu-anjang
export const projects: Project[] = [
  {
    title: "Trading Jurnal",
    description:
      "Web app analitik & pencatatan trading: equity curve, KPI win-rate, dan risk management. Dilengkapi autentikasi dan database dengan Row Level Security.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    link: "https://trading-jurnal-five.vercel.app",
    imageUrl: "/projects/trading-jurnal.webp",
  },
  {
    title: "SekolahKu (Data Siswa)",
    description:
      "Aplikasi mobile manajemen data siswa berbasis Flutter & Firebase Firestore dengan arsitektur Riverpod, plus prototipe web interaktif 1:1 high-fidelity.",
    stack: ["Flutter", "Firebase", "Riverpod", "Dart"],
    link: "https://github.com/ibnu-anjang/Data-Management-Siswa",
    imageUrl: "",
  },
  {
    title: "GAMES-HUB",
    description:
      "Portal kumpulan game web modern yang dapat langsung dimainkan di browser, dibangun menggunakan Next.js 16 dan Tailwind CSS v4.",
    stack: ["Next.js 16", "Tailwind v4", "TypeScript"],
    link: "https://github.com/ibnu-anjang/GAMES-HUB",
    imageUrl: "/projects/games-hub.webp",
  },
  {
    title: "Simple Cash Tracker",
    description:
      "Aplikasi pencatatan kas kelas terstruktur dengan PHP dan MySQL/MariaDB, mendukung containerized development via Docker maupun XAMPP.",
    stack: ["PHP", "MySQL", "Docker", "XAMPP"],
    link: "https://github.com/ibnu-anjang/Simple-Cash-Tracker",
    imageUrl: "",
  },
];

// Hapus data statistik palsu sesuai aturan R-17 (Empty is better than deceptive)
export const achievements: Achievement[] = [];

// Testimoni: biarkan kosong jika belum ada review tertulis dari klien
export const testimonials: Testimonial[] = [];
