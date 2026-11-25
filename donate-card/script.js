(function () {
  const DEFAULT_DATA = {
    platform: "SociaBuzz",
    name: "Nama Donatur",
    amount: "Rp 0",
    message: "Pesan dukungan akan tampil di sini."
  };

  function getQueryData() {
    const params = new URLSearchParams(window.location.search);
    return {
      platform: params.get("platform") || DEFAULT_DATA.platform,
      name: params.get("name") || DEFAULT_DATA.name,
      amount: params.get("amount") || DEFAULT_DATA.amount,
      message: params.get("message") || DEFAULT_DATA.message
    };
  }

  function render(data) {
    const p = document.getElementById("donatePlatform");
    const n = document.getElementById("donorName");
    const a = document.getElementById("donateAmount");
    const m = document.getElementById("donateMessage");

    if (p) p.textContent = data.platform;
    if (n) n.textContent = data.name;
    if (a) a.textContent = data.amount;
    if (m) m.textContent = data.message;
  }

  let currentData = getQueryData();
  render(currentData);
  setTimeout(() => render(currentData), 150);
  setTimeout(() => render(currentData), 500);

  window.addEventListener("message", (event) => {
    if (!event.data || typeof event.data !== "object") return;
    const payload = event.data.donation || event.data;
    if (
      payload.name !== undefined ||
      payload.amount !== undefined ||
      payload.message !== undefined ||
      payload.platform !== undefined
    ) {
      currentData = {
        platform: payload.platform ?? currentData.platform,
        name: payload.name ?? currentData.name,
        amount: payload.amount ?? currentData.amount,
        message: payload.message ?? currentData.message
      };
      render(currentData);
    }
  });
})();