(function () {
  const DEFAULT_DONATION = {
    platform: "SociaBuzz",
    name: "KuroNeko",
    amount: "Rp 50.000",
    message: "Semangat terus live-nya! Suaranya jernih dan tampilannya enak dilihat."
  };

  function renderDonation(data) {
    const cardEl = document.getElementById("donateCard");
    const platformEl = document.getElementById("donatePlatform");
    const nameEl = document.getElementById("donorName");
    const amountEl = document.getElementById("donateAmount");
    const msgEl = document.getElementById("donateMessage");

    if (platformEl) platformEl.textContent = data.platform || DEFAULT_DONATION.platform;
    if (nameEl) nameEl.textContent = data.name || DEFAULT_DONATION.name;
    if (amountEl) amountEl.textContent = data.amount || DEFAULT_DONATION.amount;
    if (msgEl) msgEl.textContent = data.message || DEFAULT_DONATION.message;

    if (cardEl) {
      cardEl.classList.remove("is-hidden");
    }
  }

  // Mendukung event alert Streamlabs jika dihubungkan ke Alert Box / Custom Event
  document.addEventListener("onEventReceived", function (obj) {
    if (!obj || !obj.detail || !obj.detail.event) return;
    const ev = obj.detail.event;
    if (ev.type === "donation") {
      renderDonation({
        platform: "Donation",
        name: ev.name,
        amount: ev.formattedAmount || ev.amount,
        message: ev.message
      });
    }
  });

  renderDonation(DEFAULT_DONATION);
})();