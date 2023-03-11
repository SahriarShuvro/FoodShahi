let foodExpandImage = document.querySelectorAll(".foodExpandImage");
let foodImageInsert = document.getElementById("foodImageInsert");

foodExpandImage.forEach((foodExpandSingleImage) => {
  foodExpandSingleImage.addEventListener("click", function (img) {
    var src = this.getAttribute("src");
    foodImageInsert.setAttribute("src", src);
  });
});
// console.log("Hi");
