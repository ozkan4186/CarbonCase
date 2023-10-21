const slider = document.querySelector(".slider");
const filters = document.querySelectorAll(".filter");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");


filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((f) => f.classList.remove("active"));
    filter.classList.add("active");
  });
});

slider.addEventListener("scroll", () => {
  filters.forEach((filter) => {
    if (isElementInViewport(filter)) {
      filters.forEach((f) => f.classList.remove("active"));
      filter.classList.add("active");
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
