let orderDetailsMultipleButton = document.querySelectorAll(".orderDetails");

orderDetailsMultipleButton.forEach((orderDetailsSingleButton) => {
  let terget = orderDetailsSingleButton.getAttribute("data-target");
  let tergetElement = document.getElementById(terget);
  orderDetailsSingleButton.addEventListener("click", function () {
    tergetElement.classList.toggle("activeOrderDetails");
  });
});

console.log("hi");
