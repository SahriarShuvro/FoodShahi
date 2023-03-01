{
  let multipleMenuAndReviewsTab =
    document.querySelectorAll(".menuAndReviewsTab");

  multipleMenuAndReviewsTab.forEach((singleMenuAndReviewsTab) => {
    let targetId = singleMenuAndReviewsTab.getAttribute("data-target");
    let targetElement = document.getElementById(targetId);

    singleMenuAndReviewsTab.addEventListener("click", function () {
      multipleMenuAndReviewsTab.forEach((e) => {
        let targetId2 = e.getAttribute("data-target");
        let targetElement2 = document.getElementById(targetId2);
        e.classList.remove("tab-active");
        targetElement2.classList.remove("activeTab");
      });
      singleMenuAndReviewsTab.classList.add("tab-active");
      targetElement.classList.add("activeTab");
    });
  });
}

{
  let multiplefoodCategoryTabButton =
    document.querySelectorAll(".foodCategoryTab");

  multiplefoodCategoryTabButton.forEach((singlefoodCategoryTabButton) => {
    let targetButton = singlefoodCategoryTabButton.getAttribute("data-target");
    let targetCategory = document.getElementById(targetButton);
    let all = document.getElementById("all");

    singlefoodCategoryTabButton.addEventListener("click", function () {
      multiplefoodCategoryTabButton.forEach((el) => {
        let targetButton2 = el.getAttribute("data-target");
        let targetCategory2 = document.getElementById(targetButton2);
        targetCategory2.classList.remove("activeFoodTabe");
        el.classList.remove("tab-active");
        all.classList.remove("tab-active");
      });
      targetCategory.classList.add("activeFoodTabe");
      singlefoodCategoryTabButton.classList.add("tab-active");
    });

    all.addEventListener("click", function () {
      all.classList.add("tab-active");
      targetCategory.classList.add("activeFoodTabe");
    });
  });
}

{
  let multipleMenuAndReviewsTab = document.querySelectorAll(".profileTabs");

  multipleMenuAndReviewsTab.forEach((singleMenuAndReviewsTab) => {
    let targetId = singleMenuAndReviewsTab.getAttribute("data-target");
    let targetElement = document.getElementById(targetId);

    singleMenuAndReviewsTab.addEventListener("click", function () {
      multipleMenuAndReviewsTab.forEach((e) => {
        let targetId2 = e.getAttribute("data-target");
        let targetElement2 = document.getElementById(targetId2);
        e.classList.remove("tab-active");
        targetElement2.classList.remove("activeSection");
      });
      singleMenuAndReviewsTab.classList.add("tab-active");
      targetElement.classList.add("activeSection");
    });
  });
}
