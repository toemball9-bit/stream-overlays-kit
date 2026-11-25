(function () {
  const CONFIG = {
    title: "Donate me here",
    displayUrl: "sociabuzz.com/yourhandle",
    qrImageUrl: "https://raw.githubusercontent.com/toemball9-bit/stream-overlays-kit/main/assets/qr-example.png"
  };

  function mountQrCard() {
    const titleEl = document.getElementById("qrTitle");
    const linkEl = document.getElementById("qrLinkText");
    const qrEl = document.getElementById("qrCanvas");

    if (titleEl) titleEl.textContent = CONFIG.title;
    if (linkEl) linkEl.textContent = CONFIG.displayUrl;

    if (qrEl && CONFIG.qrImageUrl) {
      qrEl.innerHTML = `
        <img
          src="${CONFIG.qrImageUrl}"
          alt="QR Code"
          style="width: 100%; height: 100%; object-fit: contain; border-radius: 8px; display: block;"
        />
      `;
    }
  }

  mountQrCard();
  setTimeout(mountQrCard, 120);
  setTimeout(mountQrCard, 500);
})();