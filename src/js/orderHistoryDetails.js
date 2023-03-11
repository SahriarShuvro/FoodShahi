let orderDetailsMultipleButton = document.querySelectorAll(".orderDetails");
let arrowChange = false;

orderDetailsMultipleButton.forEach((orderDetailsSingleButton) => {
  let terget = orderDetailsSingleButton.getAttribute("data-target");
  let tergetArrow = orderDetailsSingleButton.getAttribute("data-arrow-target");
  let tergetElement = document.getElementById(terget);
  let changeArrow = document.getElementById(tergetArrow);
  orderDetailsSingleButton.addEventListener("click", function () {
    if (!arrowChange) {
      tergetElement.classList.add("activeOrderDetails");
      changeArrow.setAttribute("name", "chevron-up-outline");
    } else {
      tergetElement.classList.remove("activeOrderDetails");
      changeArrow.setAttribute("name", "chevron-down-outline");
    }
    arrowChange = !arrowChange;
  });
});
