document.querySelectorAll("[data-page]").forEach((link) => {
  const page = document.body.dataset.page;
  if (link.dataset.page === page) {
    link.classList.add("active");
  }
});

document.querySelectorAll("[data-today]").forEach((node) => {
  node.textContent = "2026-04-14";
});
