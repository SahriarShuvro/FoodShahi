{
  let modal = document.getElementById("modal");
  let addAddressButton = document.getElementById("addAddress");
  let modalCloseButton = document.getElementById("modalCloseButton");

  addAddressButton.addEventListener("click", showModal);
  modalCloseButton.addEventListener("click", hideModal);

  function showModal() {
    modal.classList.toggle("activeModal");
  }

  function hideModal() {
    modal.classList.remove("activeModal");
  }
}

let modal = document.getElementById("modal2");

addAddressButton.addEventListener("click", showModal);
modalCloseButton.addEventListener("click", hideModal);

function showModal2() {
  modal.classList.toggle("activeModal");
}

function hideModal2() {
  modal.classList.remove("activeModal");
}
