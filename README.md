# Stream Overlays Kit

Koleksi widget overlay bergaya *frosted dark* minimalis untuk kebutuhan live streaming (Streamlabs / browser source), dimulai dari **QR Card** dan terus dikembangkan untuk **Donate Card** serta overlay lainnya.

## Struktur Folder
- `qr-card/` — HTML, CSS, dan JS untuk kartu QR donasi
- `donate-card/` — rencana komponen kartu donasi
- `overlays/` — rencana layout dan widget overlay tambahan
- `assets/` — contoh aset gambar

## Cara Pakai (`qr-card`)
1. Upload gambar QR kamu ke repository/hosting publik dan salin direct link-nya.
2. Buka `qr-card/script.js` lalu ubah `title`, `displayUrl`, dan `qrImageUrl` pada `CONFIG`.
3. Salin isi `index.html`, `style.css`, dan `script.js` ke **Custom Code** pada Custom Widget di Streamlabs.