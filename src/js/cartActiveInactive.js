let btnCart = document.getElementById("btnCart");
let cartBody = document.getElementById("cartBody");

btnCart.addEventListener("click", function () {
  cartBody.classList.add("ActiveCartBody");
});
btnCart.addEventListener("mouseover", function () {
  cartBody.classList.add("ActiveCartBody");
});
btnCart.addEventListener("mouseout", function () {
  if (!btnCart.matches(":focus")) {
    cartBody.classList.remove("ActiveCartBody");
  }

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest("#cartBody") &&
      !event.target.closest("#btnCart")
    ) {
      cartBody.classList.remove("ActiveCartBody");
    }
  });
  cartBody.addEventListener("mouseover", function () {
    cartBody.classList.add("ActiveCartBody");
  });
  cartBody.addEventListener("mouseout", function () {
    cartBody.classList.remove("ActiveCartBody");
  });
});

{
  let profileButton = document.getElementById("user-menu-button");
  let profileSection = document.getElementById("user-dropdown");

  profileButton.addEventListener("click", function () {
    profileSection.classList.add("activeProfileSection");
  });

  profileButton.addEventListener("mouseover", function () {
    profileSection.classList.add("activeProfileSection");
  });

  profileButton.addEventListener("mouseout", function () {
    if (!profileButton.matches(":focus")) {
      profileSection.classList.remove("activeProfileSection");
    }
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest("#user-menu-button") &&
      !event.target.closest("#user-dropdown")
    ) {
      profileSection.classList.remove("activeProfileSection");
    }
  });
  profileSection.addEventListener("mouseover", function () {
    profileSection.classList.add("activeProfileSection");
  });
  profileSection.addEventListener("mouseout", function () {
    profileSection.classList.remove("activeProfileSection");
  });
}

{
  let hamburgerButton = document.getElementById("hamburgerButton");
  let mobileMenu = document.getElementById("mobile-menu-2");

  hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("mobileMenuActive");
  });
}
