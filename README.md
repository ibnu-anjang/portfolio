# Portofolio Ibnu Anjang

Landing page portofolio + jasa freelance. Static, tanpa backend. `git push`, Vercel langsung jalan tanpa database atau env var.

## Edit konten

Semua isi ada di satu file: [`src/lib/content.ts`](src/lib/content.ts).

- `site`: nama, role, tagline, email, WhatsApp, link GitHub/sosmed.
- `aboutData`: cerita, prinsip kerja, status ketersediaan.
- `services`: daftar layanan beserta label harga.
- `projects`: portofolio, termasuk studi kasus (`problem`, `challenge`, `solution`, `impact`).
- `processSteps`: alur kerja.
- `achievements`: angka pencapaian. Biarkan `[]` kalau belum ada data nyata.
- `testimonials`: ulasan klien. Biarkan `[]` kalau belum ada yang asli.

Section `achievements` dan `testimonials` tidak dirender selama array-nya kosong, jadi tidak ada section kosong atau angka karangan yang muncul di halaman.

## Cara kerja form

Form "Kontak" tidak menyimpan apa pun ke database. Submit-nya membuka WhatsApp ke nomor di `site.whatsapp` dengan pesan terisi otomatis. Kalau browser memblokir tab baru, halaman menampilkan link cadangan ke chat yang sama, sehingga lead tidak hilang tanpa jejak.

## Domain

Gambar Open Graph dan `metadataBase` memakai `NEXT_PUBLIC_SITE_URL` kalau diisi, kalau tidak jatuh ke `https://ibnuportofolio.vercel.app`. Isi env var itu saat deploy kalau domainnya sudah final.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind v4. Tanpa backend.

## Lokal

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # cek build sebelum deploy
npm run lint     # eslint
```

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Vercel, Import Project, pilih repo, Deploy.
3. Opsional: isi env var `NEXT_PUBLIC_SITE_URL` dengan domain final.
