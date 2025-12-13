document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".bottom-nav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
});
