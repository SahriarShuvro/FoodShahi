let isClicked = false;
let favoriteMultipleButton = document.querySelectorAll(".favoriteButton");
favoriteMultipleButton.forEach((favoriteSingleButton) => {
  favoriteSingleButton.addEventListener("click", function () {
    if (!isClicked) {
      favoriteSingleButton.setAttribute(
        "style",
        "background:red!important; color:#fff !important"
      );
      favoriteSingleButton.setAttribute("data-tip", "Added to favorites list!");
    } else {
      favoriteSingleButton.removeAttribute(
        "style",
        "background:red!important; color:#fff !important"
      );
      favoriteSingleButton.setAttribute(
        "data-tip",
        "Removed from favorites list!"
      );
      setTimeout(function () {
        favoriteSingleButton.setAttribute(
          "data-tip",
          "Tap to add favorites list"
        );
      }, 2000);
    }

    isClicked = !isClicked;
  });
});
