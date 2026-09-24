// ⚠️ File konfigurasi utama konten portofolio Ibnu Anjang

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

export const site = {
  name: "Ibnu Anjang",
  role: "Junior Fullstack Web & Mobile Developer",
  tagline: "Membangun website & aplikasi yang rapi, cepat, dan siap produksi.",
  taglineAccent: "rapi, cepat",
  about:
    "Saya adalah Junior Fullstack Web & Mobile Developer yang fokus membangun produk digital nyata, bukan sekadar prototipe. Spesialisasi saya meliputi ekosistem Next.js & TypeScript untuk web modern berkinerja tinggi, serta Flutter untuk aplikasi mobile Android/iOS. Saya terbiasa memikirkan arsitektur data, efisiensi state management, dan kemudahan penggunaan bagi pengguna akhir.",
  email: "ibnumaulidi08@gmail.com",
  avatarUrl: "/avatar.jpg",
  whatsapp: "6285179940204",
  github: "https://github.com/ibnu-anjang",
  linkedin: "", // Kosongkan dulu sampai profil LinkedIn siap; tidak akan muncul sebagai link mati
  cvUrl: "", // Kosongkan dulu sampai file CV siap; tidak akan muncul sebagai link mati
  instagram: "",
};

// Skill/tool yang muncul di Tech Stack marquee
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
    name: "Web Application Development",
    description:
      "Pengembangan web modern dari landing page responsif hingga aplikasi web interaktif & dashboard. Menggunakan Next.js, TypeScript, dan Tailwind CSS dengan arsitektur bersih, cepat, dan SEO-ready.",
    priceText: "Konsultasi Estimasi Gratis · Sesuai Scope",
  },
  {
    name: "Mobile App Development",
    description:
      "Aplikasi mobile cross-platform untuk Android dan iOS menggunakan Flutter & Dart. Terintegrasi Firebase/Supabase, manajemen state Riverpod yang terstruktur, dan performa mulus.",
    priceText: "Konsultasi Estimasi Gratis · Sesuai Scope",
  },
  {
    name: "Backend, Database & DevOps",
    description:
      "Perancangan skema database relasional (PostgreSQL/MySQL), REST API, Row Level Security (RLS) di Supabase, containerization Docker, serta automated deployment ke Vercel/Cloud.",
    priceText: "Konsultasi Estimasi Gratis · Sesuai Scope",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Diskusi & Pemahaman Masalah",
    description:
      "Membahas latar belakang kebutuhan Anda, target pengguna, dan fungsi utama yang ingin dibangun secara santai dan transparan.",
  },
  {
    title: "Penawaran & Rencana Kerja",
    description:
      "Menyusun daftar ruang lingkup fitur (scope), target jadwal rilis yang realistis, dan estimasi biaya tanpa biaya tersembunyi.",
  },
  {
    title: "Tahap Pengembangan Bertahap",
    description:
      "Coding dengan standar modern, update berkala lewat live preview sehingga Anda bisa memberi masukan langsung selama proses.",
  },
  {
    title: "Testing, Rilis & Garansi",
    description:
      "Pemeriksaan fungsionalitas, deployment ke server/hosting produksi, penyerahan source code penuh, dan pendampingan pasca-rilis.",
  },
];

// Project nyata dari portfolio & GitHub ibnu-anjang
export const projects: Project[] = [
  {
    title: "Trading Jurnal",
    category: "Fullstack Web App",
    description:
      "Platform pencatatan dan evaluasi trading harian otomatis untuk trader independen, menggantikan spreadsheet manual dengan analitik visual real-time.",
    stack: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    link: "https://trading-jurnal-five.vercel.app",
    imageUrl: "/projects/trading-jurnal.webp",
    isLive: true,
    caseStudy: {
      problem:
        "Banyak trader pemula kesulitan mengevaluasi konsistensi dan emosi trading harian karena pencatatan manual di spreadsheet membingungkan, lambat, dan rawan salah formula.",
      challenge:
        "Menyediakan kalkulasi analitik real-time (Winrate, Profit Factor, Risk-to-Reward) dan grafik pertumbuhan modal (equity curve) yang instan, sembari mengamankan data transaksi tiap trader agar terisolasi sempurna.",
      solution:
        "Membangun frontend dengan Next.js App Router dan TypeScript untuk komputasi instan di sisi browser, dipadukan dengan Supabase (PostgreSQL) serta Row Level Security (RLS) untuk isolasi data pengguna yang aman tanpa perlu backend server terpisah yang rumit.",
      impact:
        "Berhasil live di Vercel, memungkinkan trader mencatat jurnal transaksi dalam hitungan detik dengan visualisasi analitik performa yang langsung membantu pengambilan keputusan.",
    },
  },
  {
    title: "GAMES-HUB",
    category: "Interactive Web Portal",
    description:
      "Portal kumpulan game web modern yang dapat langsung dimainkan instan di browser mobile maupun desktop tanpa instalasi dan bebas iklan mengganggu.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript"],
    link: "https://games-hub-beryl-nine.vercel.app",
    githubUrl: "https://github.com/ibnu-anjang/GAMES-HUB",
    imageUrl: "/projects/games-hub.webp",
    isLive: true,
    caseStudy: {
      problem:
        "Sebagian besar situs mini-game web dipenuhi iklan pop-up berat dan tampilan yang sering rusak atau lambat saat diakses lewat layar smartphone.",
      challenge:
        "Mengoptimasi rendering game berbasis canvas & web di Next.js 16 dan Tailwind v4 agar responsif di seluruh variasi ukuran layar HP dengan latensi input yang minim.",
      solution:
        "Menerapkan arsitektur komponen React 19 modular dengan isolasi loop game per komponen, pengoptimalan gambar aset ke format WebP terkompresi, dan navigasi instan via Turbopack.",
      impact:
        "Kecepatan loading instan (< 1 detik) di perangkat mobile, mendukung navigasi sentuh (touchscreen) dan kontrol keyboard di desktop.",
    },
  },
  {
    title: "SekolahKu (Data Siswa)",
    category: "Mobile App (Android/iOS)",
    description:
      "Aplikasi mobile manajemen data siswa, kelas, dan absensi guru berbasis Flutter dengan sinkronisasi cloud real-time Firebase.",
    stack: ["Flutter", "Firebase", "Riverpod", "Dart"],
    link: "https://github.com/ibnu-anjang/Data-Management-Siswa",
    imageUrl: "",
    isLive: false,
    caseStudy: {
      problem:
        "Pencatatan data siswa dan presensi di sekolah kerap masih bergantung pada dokumen fisik atau berkas terpisah yang menyulitkan guru saat butuh pembaruan data secara cepat di lapangan.",
      challenge:
        "Menyediakan antarmuka mobile yang ringkas dan ramah bagi pengguna awam, dengan sistem manajemen state yang kokoh agar data tidak konflik saat ada input serentak.",
      solution:
        "Memilih Flutter & Dart dengan arsitektur Riverpod untuk pemisahan logika bisnis dan UI yang bersih. Menggunakan Firebase Firestore sebagai penyimpanan dokumen cloud yang sinkron secara real-time.",
      impact:
        "Aplikasi mobile yang ringan dengan navigasi cepat Material 3, kode terstruktur bersih dan terdokumentasi lengkap di repositori open-source GitHub.",
    },
  },
  {
    title: "Simple Cash Tracker",
    category: "Self-Hosted Backend Tool",
    description:
      "Aplikasi pencatatan arus kas operasional masuk-keluar yang mudah di-deploy mandiri (self-hosted) dengan Docker untuk UMKM atau organisasi kecil.",
    stack: ["PHP", "MySQL", "Docker"],
    link: "https://github.com/ibnu-anjang/Simple-Cash-Tracker",
    imageUrl: "",
    isLive: false,
    caseStudy: {
      problem:
        "UMKM atau organisasi kas kecil sering kali belum membutuhkan software akuntansi rumit dan mahal, hanya butuh transparansi arus kas masuk-keluar yang mudah dikelola.",
      challenge:
        "Membangun aplikasi web dengan dependensi seminimal mungkin, namun tetap mudah dijalankan di komputer manapun tanpa pusing urusan ketidakcocokan versi PHP/database lokal.",
      solution:
        "Menyusun kode PHP murni & MySQL yang modular dan menyertakan konfigurasi Docker (`Dockerfile` & `docker-compose.yml`) agar sistem dapat langsung menyala dengan satu perintah terminal.",
      impact:
        "Dapat dijalankan secara fleksibel baik di server lokal (XAMPP/Docker) maupun cloud VPS mandiri, memberikan kendali 100% atas data privasi keuangan.",
    },
  },
];

// Data pencapaian: hanya tampil jika ada metrik nyata
export const achievements: Achievement[] = [];

// Testimoni: hanya diisi saat sudah ada ulasan asli dari klien nyata
export const testimonials: Testimonial[] = [];
