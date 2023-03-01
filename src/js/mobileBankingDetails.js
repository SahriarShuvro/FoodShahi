{
  let cashOnDeliveryButton = document.getElementById("cashOnDeliveryButton");
  let cashOnDeliveryDetails = document.getElementById("cashOnDeliveryDetails");

  let mobileBankButton = document.getElementById("mobileBankButton");
  let mobileBankingDetails = document.getElementById("mobileBankingDetails");

  window.addEventListener("load", function () {
    cashOnDeliveryDetails.classList.add("activeCashOnDetails");
    cashOnDeliveryButton.classList.add("borderAdd");
  });
  cashOnDeliveryButton.addEventListener("click", cashOnDeliveryDetailsExpand);

  function cashOnDeliveryDetailsExpand() {
    cashOnDeliveryDetails.classList.toggle("activeCashOnDetails");
    mobileBankingDetails.classList.remove("activeMobileBank");
    mobileBankButton.classList.remove("borderAdd");
  }

  //   Mobile Bank
  mobileBankButton.addEventListener("click", expandMobileBankDetails);

  function expandMobileBankDetails() {
    mobileBankingDetails.classList.toggle("activeMobileBank");
    mobileBankButton.classList.add("borderAdd");
    cashOnDeliveryDetails.classList.remove("activeCashOnDetails");
    cashOnDeliveryButton.classList.remove("borderAdd");
  }
}
