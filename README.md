# Portfolio — Ibnu Maulidi

Landing page portofolio + jasa freelance. **Static, zero backend** — tinggal `git push`, Vercel langsung jalan tanpa setup database atau env var apa pun.

## Edit konten

Semua isi ada di **satu file**: [`src/lib/content.ts`](src/lib/content.ts).

- `site` — nama, role, tagline, about, email, WhatsApp, link GitHub/sosmed, warna utama.
- `services` — daftar layanan.
- `projects` — portofolio (link & gambar opsional).
- `achievements` — angka pencapaian.
- `testimonials` — kosongkan `[]` kalau belum punya yang asli.

Cari komentar `TODO` di file itu, isi dengan data asli. **Wajib** sebelum tunjuk ke client:

- `whatsapp` masih placeholder `"6280000000000"` → ganti ke nomor asli (format internasional, tanpa `+` / `0` depan, contoh `0812-3456-7890` → `"6281234567890"`).

## Cara kerja form

Form "Minta Penawaran" tidak menyimpan ke database — submit langsung membuka WhatsApp ke nomor di `site.whatsapp` dengan pesan terisi otomatis.

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind v4. Tidak ada backend.

## Lokal

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # cek build sebelum deploy
```

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Vercel → Import Project → pilih repo → Deploy. Tidak perlu env var apa pun.
