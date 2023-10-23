const slider = document.querySelector(".slider");
const filters = document.querySelectorAll(".filter");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");
const pro = document.getElementById("pro");
const deatil = document.getElementById("detail");
const aramaInput = document.getElementById("aramaInput");
const kartlar = document.querySelectorAll(".content1 .card");
const card = document.querySelector(".card");
const showButton1 = document.getElementById("showButton1");
const showButton2 = document.getElementById("showButton2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

// FİLTER
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

//  MODAL
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
// PROPERTY

showButton1.addEventListener("click", () => {
  content1.style.display = "block";
  content2.style.display = "none";
  showButton1.style.backgroundColor = "blue";
  showButton2.style.backgroundColor = "gray";
});

showButton2.addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "block";
  showButton2.style.backgroundColor = "blue";
  showButton1.style.backgroundColor = "gray";
});
// ACCORDİON
const down1 = document.querySelector(".down1");
const down2 = document.querySelector(".down2");
const up = document.querySelector(".up");
const accordionList = document.querySelector(".accordion-list");
const close = document.querySelector(".close");

down1.addEventListener("click", function () {
  down1.style.display = "none";
  down2.style.display = "block";
  up.style.display = "block";
  accordionList.style.display = "block";
  document.body.style.overflowX = "hidden";
});

down2.addEventListener("click", function () {
  down1.style.display = "block";
  down2.style.display = "none";
  up.style.display = "none";
  accordionList.style.display = "none";
  document.body.style.overflowX = "auto";
});
close.addEventListener("click", () => {
  down1.style.display = "block";
  down2.style.display = "none";
  up.style.display = "none";
  accordionList.style.display = "none";
  document.body.style.overflowX = "auto";
});
const clickableElement = document.getElementById("clickableElement");

clickableElement.addEventListener("click", function () {
  clickableElement.style.borderBottom = "1px dashed ";
});

aramaInput.addEventListener("input", kartlariFiltrele);

function kartlariFiltrele() {
  const aramaKelimesi = aramaInput.value.toLowerCase();

  kartlar.forEach((kart) => {
    const kartMetni = kart.textContent.toLowerCase();
    if (
      kartMetni.includes(aramaKelimesi) &&
      (aramaKelimesi.length === 2 || aramaKelimesi.length === 3)
    ) {
      kart.style.display = "block";
    } else {
      kart.style.display = "none";
    }
  });
}
