const toggleBtn = document.getElementById("breadcrump-btn");
const sortDownBtn = document.getElementById("sort-down-btn");
const togglemenuContainer = document.getElementById("toggle-menu-container");
const cleanSericesContainer = document.getElementById("clean-serivces-expand");

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
