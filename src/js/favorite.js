let isClicked = false;
let favoriteMultipleButton = document.querySelectorAll(".favoriteButton");
favoriteMultipleButton.forEach((favoriteSingleButton) => {
  favoriteSingleButton.addEventListener("click", function () {
    if (!isClicked) {
      favoriteSingleButton.setAttribute(
        "style",
        "background:red!important; color:#fff !important"
      );
      favoriteSingleButton.setAttribute("data-tip", "Added");
    } else {
      favoriteSingleButton.removeAttribute(
        "style",
        "background:red!important; color:#fff !important"
      );
      favoriteSingleButton.setAttribute(
        "data-tip",
        "Removed!"
      );
      setTimeout(function () {
        favoriteSingleButton.setAttribute(
          "data-tip",
          "Add"
        );
      }, 2000);
    }

    isClicked = !isClicked;
  });
});
