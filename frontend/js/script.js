document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar a");
  const content = document.getElementById("content-area");

  links.forEach(link => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-member");
      if (!page) return;

      try {
        const res = await fetch(page);
        if (!res.ok) throw new Error("Failed to load page");
        const data = await res.text();
        content.innerHTML = data;
        initFormHandler(); // reattach form event listener if contact section loaded

        // Smooth scroll to top for better UX
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch (err) {
        content.innerHTML = `<p style="color:red;">Error loading page: ${err.message}</p>`;
      }
    });
  });
});


