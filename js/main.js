const toggleBtn = document.getElementById("breadcrump-btn");
const sortDownBtn = document.getElementById("sort-down-btn");
const togglemenuContainer = document.getElementById("toggle-menu-container");
const cleanSericesContainer = document.getElementById("clean-serivces-expand");

const sliderWrapper = document.querySelector(".slider-container-cards");
const sliderCards = document.querySelectorAll(".slider-container-card");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let slideIndex = 0;
const slideWidth = sliderCards[0].clientWidth + 30;
const maxSlide = sliderCards.length - 1;

function slide() {
  sliderWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function prevSlide() {
  if (slideIndex === 0) {
    slideIndex = maxSlide;
  } else {
    slideIndex--;
  }
  slide();
}

function nextSlide() {
  if (slideIndex === maxSlide) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slide();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

function toggle() {
  const icon = this.querySelector("i");
  icon.classList.toggle("fa-close");
  togglemenuContainer.classList.toggle("hidden");
}
function toggleSort() {
  this.classList.toggle("fa-sort-up");
  cleanSericesContainer.classList.toggle("hidden");
}

toggleBtn.addEventListener("click", toggle);
sortDownBtn.addEventListener("click", toggleSort);
