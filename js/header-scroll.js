window.addEventListener("scroll", () => {
  const header = document.querySelector(".mobile-header");
  if (window.scrollY > 10) {
    header.style.background = "rgba(255,214,235,0.85)";
  } else {
    header.style.background = "#ffd6eb";
  }
});
