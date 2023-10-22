const slider = document.querySelector(".slider");
const filters = document.querySelectorAll(".filter");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-button");
const pro =document.getElementById("pro")
const deatil=document.getElementById("detail")
const showButton1 = document.getElementById("showContent1");
const showButton2 = document.getElementById("showContent2");
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
  content1.style.display = "block"; // İçerik 1'i göster
  content2.style.display = "none"; // İçerik 2'yi gizle
});

showButton2.addEventListener("click", () => {
  content1.style.display = "none"; // İçerik 1'i gizle
  content2.style.display = "block"; // İçerik 2'yi göster
});


const down1 = document.querySelector(".down1");
const down2 = document.querySelector(".down2");
const up = document.querySelector(".up");
const accordionList = document.querySelector(".accordion-list");
const close = document.querySelector(".close"); // close sınıfına sahip bir öğe olduğundan "." kullanmalısınız.

down1.addEventListener("click", function () {
  down1.style.display = "none";
  down2.style.display = "block";
  up.style.display = "block";
  accordionList.style.display = "block";
  document.body.style.overflowX = "hidden"; // Bu satır yatay kaydırmayı kapatır.
});

down2.addEventListener("click", function () {
  down1.style.display = "block";
  down2.style.display = "none";
  up.style.display = "none";
  accordionList.style.display = "none";
  document.body.style.overflowX = "auto"; // Bu satır yatay kaydırmayı tekrar açar.
});
close.addEventListener("click",()=>{
  down1.style.display = "block";
  down2.style.display = "none";
  up.style.display = "none";
  accordionList.style.display = "none";
  document.body.style.overflowX = "auto"; // B
})
const clickableElement = document.getElementById("clickableElement");

clickableElement.addEventListener("click", function () {
  clickableElement.style.borderBottom = "1px dashed "; // Tıklandığında kesik çizgiyi görünür kılar
});



















