function showPopup(message, type = "success") {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popup-message");

  popupMessage.textContent = message;

  // Reset classes
  popup.classList.remove("error", "loading");

  // Add type-based style
  if (type === "error") popup.classList.add("error");
  if (type === "loading") popup.classList.add("loading");

  // Show instantly
  popup.classList.add("show");

  // Auto-hide after 2.5s (only for non-loading)
  if (type !== "loading") {
    clearTimeout(window.popupTimer);
    window.popupTimer = setTimeout(() => {
      popup.classList.remove("show");
    }, 2500);
  }
}

function initFormHandler() {
  const form = document.querySelector("#queryForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const bookingType = document.querySelector("#bookingType").value;
    const service = document.querySelector("#service").value;
    const message = document.querySelector("#message").value;

    // ⚡ Show instant feedback (before sending request)
    showPopup("Submitting your request...", "loading");

    try {
      const res = await fetch('/api/submitForm', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, bookingType, service, message })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Server error");

      // ✅ Replace message after response
      showPopup("✅ Request submitted successfully!", "success");
      e.target.reset();
    } catch (err) {
      showPopup("❌ Failed to send query: " + err.message, "error");
      console.error(err);
    }
  });
}

initFormHandler();
