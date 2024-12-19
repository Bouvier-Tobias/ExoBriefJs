document.addEventListener("DOMContentLoaded", () => {
  const carrouselleBtn = document.querySelector("#carrouselleBtn");
  const box = document.querySelectorAll(".box");

  let currentIndex = 0;

  function slideCarrouselle() {
    box.forEach((box, index) => {
      box.classList.toggle("active", index === currentIndex);
    });
  }

  carrouselleBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % box.length;
    slideCarrouselle();
  });
});
slideCarrouselle();
