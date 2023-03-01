let categoryFilter = document.getElementById("categoryFilter");
let categoryFilter2 = document.getElementById("categoryFilter2");

window.addEventListener("scroll", function () {
  if (window.scrollY > 615) {
    categoryFilter.classList.add("categoryFilterFixed");
    categoryFilter2.classList.add("categoryFilterFixed2");
  } else {
    categoryFilter.classList.remove("categoryFilterFixed");
    categoryFilter2.classList.remove("categoryFilterFixed2");
  }
});
