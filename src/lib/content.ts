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
  name: "Ibnu Maulidi",
  role: "Web & Mobile Developer",
  tagline: "Bikin website & aplikasi yang rapi, cepat, dan siap produksi.",
  // Bagian tagline yang di-highlight dengan gradient. Harus substring persis dari tagline.
  taglineAccent: "rapi, cepat",
  about:
    "Saya membantu bisnis dan personal membangun produk digital — dari landing page, web app, sampai aplikasi mobile. Fokus saya: kode bersih, performa kencang, dan hasil yang benar-benar dipakai pengguna.",
  email: "ibnumaulidi08@gmail.com",
  // Foto profil di hero. Ganti file public/avatar.jpg untuk update. Kosongkan ("") untuk sembunyikan.
  avatarUrl: "/avatar.jpg",
  whatsapp: "6285179940204",
  github: "https://github.com/ibnu-anjang",
  // TODO (opsional): isi kalau ada. Kosongkan ("") kalau tidak mau ditampilkan.
  linkedin: "",
  instagram: "",
};

// Skill/tool yang muncul di marquee Tech Stack.
export const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Supabase",
  "PostgreSQL",
  "Node.js",
  "Flutter",
  "Dart",
  "Firebase",
  "Riverpod",
  "Git",
  "Vercel",
];

export const services: Service[] = [
  {
    name: "Web Development",
    description:
      "Landing page, company profile, sampai web app & dashboard. Next.js + Tailwind, responsif dan SEO-friendly.",
    priceText: "Mulai dari nego",
  },
  {
    name: "Mobile App",
    description:
      "Aplikasi Android/iOS dengan Flutter + Firebase. Auth, realtime database, dan deploy ke store.",
    priceText: "Mulai dari nego",
  },
  {
    name: "Backend & Integrasi",
    description:
      "Database, REST/API, autentikasi, dan integrasi layanan pihak ketiga (Supabase, payment, dll).",
    priceText: "Mulai dari nego",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Konsultasi Gratis",
    description:
      "Ceritakan kebutuhan Anda via WhatsApp. Kita diskusi tujuan, fitur, dan timeline — tanpa biaya, tanpa komitmen.",
  },
  {
    title: "Penawaran & Scope",
    description:
      "Saya kirim penawaran tertulis: rincian fitur, estimasi waktu, dan harga. Jelas di awal, tidak ada biaya tersembunyi.",
  },
  {
    title: "Pengerjaan",
    description:
      "Develop dengan update progres berkala. Anda bisa lihat preview-nya langsung dan kasih masukan di tengah jalan.",
  },
  {
    title: "Serah Terima & Garansi",
    description:
      "Website/aplikasi live dan jadi milik Anda sepenuhnya — termasuk source code. Ada masa garansi untuk perbaikan bug.",
  },
];

// Project ASLI kamu. Tambah/kurangi sesuai kenyataan. Link & gambar opsional.
export const projects: Project[] = [
  {
    title: "Trading Jurnal",
    description:
      "Web app pencatatan & analitik trading: equity curve, KPI, dan manajemen risiko. Auth + database dengan RLS.",
    stack: ["Next.js", "Supabase", "Tailwind"],
    link: "https://trading-jurnal-five.vercel.app",
    imageUrl: "/projects/trading-jurnal.webp",
  },
  {
    title: "Template Flutter + Firebase",
    description:
      "Starter aplikasi mobile dengan arsitektur Riverpod, auth Firebase, dan struktur siap-pakai untuk proyek baru.",
    stack: ["Flutter", "Firebase", "Riverpod"],
    link: "",
    imageUrl: "",
  },
  // TODO: tambahkan project nyata lain di sini.
];

// TODO: ganti dengan angka ASLI. Hapus yang belum punya datanya — jangan karang.
export const achievements: Achievement[] = [
  { metric: "10+", label: "Proyek diselesaikan" },
  { metric: "3+", label: "Tahun ngoding" },
  { metric: "100%", label: "On-time delivery" },
];

// Testimoni HARUS asli. Biarkan array kosong [] kalau belum punya —
// lebih baik kosong daripada palsu di depan calon client.
export const testimonials: Testimonial[] = [];
