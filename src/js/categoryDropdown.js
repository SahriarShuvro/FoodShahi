let multipleDropdownButton = document.querySelectorAll(".dropdownButton");
let checkedBox = document.querySelectorAll(".checkedBox");

multipleDropdownButton.forEach((singleDropdownButton, index) => {
  singleDropdownButton.addEventListener("click", () => {
    checkedBox.forEach((checkedBox) => {
      checkedBox.classList.remove("activeDropdown");
    });
    checkedBox[index].classList.toggle("activeDropdown");
  });
});
