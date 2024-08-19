document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  leftArrow.addEventListener("click", () => {
    gallery.scrollBy({ left: -200, behavior: "smooth" });
  });

  rightArrow.addEventListener("click", () => {
    gallery.scrollBy({ left: 200, behavior: "smooth" });
  });
});
