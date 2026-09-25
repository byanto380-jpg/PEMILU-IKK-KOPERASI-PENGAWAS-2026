# Website Pemilihan Ketua Koperasi — RAT 2026

Paket ini adalah **template website statis** yang siap di-host gratis.

## Fitur
- Beranda RAT 2026
- Agenda rapat
- Daftar calon ketua
- Verifikasi pemilih (DEMO)
- Surat suara satu pilihan
- Konfirmasi suara
- Rekap hasil demo
- Tampilan responsif HP
- Mudah diganti nama koperasi, tanggal, calon, logo, dan agenda

## PENTING UNTUK PEMILIHAN NYATA
Versi ini memakai `localStorage` browser sehingga **bukan sistem pemungutan suara yang aman untuk pemilihan resmi**. Untuk pemilihan nyata perlu backend/database, autentikasi anggota, daftar pemilih yang sah, pencegahan suara ganda di server, audit log, backup, dan hak akses admin.

## Cara mengubah data calon
Buka `app.js`, bagian:
`const candidates=[...]`

## Hosting gratis
### Opsi A — GitHub Pages
1. Buat akun GitHub.
2. Buat repository baru, misalnya `pemilihan-ketua-koperasi-2026`.
3. Upload `index.html`, `style.css`, dan `app.js`.
4. Repository → Settings → Pages → Deploy from branch → `main` / root.
5. GitHub akan memberikan alamat website gratis.

### Opsi B — Netlify
1. Buat akun Netlify.
2. Pilih Add new site → Deploy manually.
3. Upload folder website ini.
4. Netlify memberikan subdomain gratis.

## Rekomendasi untuk versi produksi
Jika ingin pemilihan benar-benar online dan setiap anggota hanya dapat memilih satu kali, gunakan:
- database/server-side vote storage
- login nomor anggota + PIN/OTP
- token pemilihan sekali pakai
- admin dashboard
- audit log
- export hasil CSV/PDF
- pengaturan waktu buka/tutup pemilihan
- pengumuman hasil setelah pemilihan ditutup
- backup database
