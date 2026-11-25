# Stream Overlays Kit

Koleksi widget overlay bergaya *frosted dark* minimalis untuk kebutuhan live streaming (Streamlabs / browser source).

## Struktur Folder
- `qr-card/` — widget kartu QR donasi (`index.html`, `style.css`, `script.js`)
- `donate-card/` — widget kartu notifikasi donasi (`index.html`, `style.css`, `script.js`)
- `overlays/` — ruang untuk layout atau widget overlay tambahan
- `assets/` — contoh aset gambar bawaan template

## Cara Pakai

### 1. `qr-card`
1. Upload gambar QR kamu ke hosting publik dan salin direct URL-nya.
2. Buka `qr-card/script.js` lalu sesuaikan `title`, `displayUrl`, dan `qrImageUrl` pada `CONFIG`.
3. Salin isi `index.html`, `style.css`, dan `script.js` ke **Custom Code** pada Custom Widget di Streamlabs.

### 2. `donate-card`
1. Salin isi `donate-card/index.html`, `donate-card/style.css`, dan `donate-card/script.js` ke **Custom Code** pada Custom Widget di Streamlabs.
2. Sesuaikan data awal pada `DEFAULT_DONATION` di `donate-card/script.js` sesuai kebutuhan *preview* atau *layout* kamu.