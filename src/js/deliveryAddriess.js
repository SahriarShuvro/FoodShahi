let commonClassForAddress = document.querySelectorAll(".commonClassForAddress");

commonClassForAddress.forEach((singleAddressButton) => {
  singleAddressButton.addEventListener("click", function () {
    commonClassForAddress.forEach((element) => {
      element.classList.remove("activeAddressButton");
    });
    singleAddressButton.classList.toggle("activeAddressButton");
  });
});
