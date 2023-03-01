let openNow = document.querySelector(".openNow");
let closeNow = document.querySelector(".closeNow");

let date = new Date();
let minutes = date.getMinutes();
let hours = date.getHours();

function openClose() {
  if (hours >= 9 && hours < 22) {
    openNow.removeAttribute("style", "display:none");
    closeNow.setAttribute("style", "display:none");
  } else {
    openNow.setAttribute("style", "display:none");
    closeNow.removeAttribute("style", "display:none");
  }
}

openClose();
