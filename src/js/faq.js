let faqButton = document.querySelectorAll(".faqButton");
let isClicked = false;

faqButton.forEach((faqButtonEach) => {
  faqButtonEach.addEventListener("click", function () {
    let TargetData = faqButtonEach.getAttribute("data-target");
    let TargetData2 = faqButtonEach.getAttribute("data-arrow-target");
    let targetId = document.getElementById(TargetData);
    let targetId2 = document.getElementById(TargetData2);

    if (targetId && targetId2) {
      if (!isClicked) {
        targetId.classList.add("activeFAQ");
        targetId2.setAttribute("name", "chevron-down-outline");
      } else {
        targetId.classList.remove("activeFAQ");
        targetId2.setAttribute("name", "chevron-forward-outline");
      }
      isClicked = !isClicked;
    }
  });
});
