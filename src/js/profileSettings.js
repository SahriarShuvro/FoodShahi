let varifyButton = document.getElementById("varifyButton");
let phoneNumber = document.getElementById("phoneNumber");
let verification = document.getElementById("verification");

varifyButton.addEventListener("click", varify);

function varify() {
  varifyButton.innerHTML = "Verify";
  phoneNumber.setAttribute("disabled", "disabled");
  verification.classList.add("activeCodeInput");
}
document.addEventListener("click", function (event) {
  if (!event.target.closest("#phoneEditModal")) {
    varifyButton.innerHTML = "Get Code";
    phoneNumber.removeAttribute("disabled", "disabled");
    verification.classList.remove("activeCodeInput");
  }
});

{
  function copyText() {
    const refferCode = document.getElementById("refferCode");
    const text = refferCode.textContent;
    navigator.clipboard.writeText(text);
    refferCode.setAttribute("title", "Copied!");

    refferCode.setAttribute("data-tip", "Copied!");
    setTimeout(function () {
      refferCode.setAttribute("data-tip", "Click to copy this text.");
    }, 2000);
  }
}

{
  let isTranslated = false;

  function translateLanguage() {
    const textTranslate = document.getElementById("textTranslate");
    const originalText = `Share this code with your friends. If someone uses this code while registering, you will get points for all completed orders of that user. There is no limitation to sharing your referral code.`;

    if (!isTranslated) {
      textTranslate.innerHTML = `আপনার বন্ধুদের সাথে এই কোড শেয়ার করুন. যদি কেউ নিবন্ধন করার সময় এই কোডটি ব্যবহার করে, আপনি সেই ব্যবহারকারীর সমস্ত কমপ্লিট অর্ডারের জন্য পয়েন্ট পাবেন। আপনার রেফারেল কোডটি যত খুশি তত মানুষের সাথে শেয়ার করতে পারবেন।`;
      textTranslate.setAttribute(
        "data-tip",
        "ইংরেজিতে অনুবাদ করতে চাইলে ক্লিক করুন"
      );
    } else {
      textTranslate.innerHTML = originalText;
      textTranslate.setAttribute("data-tip", "Click to translate to English");
    }

    isTranslated = !isTranslated;
  }
}

// Resturant Card
{
  const shareRefferCode = document.getElementById("shareRefferCode");

  if (navigator.share) {
    // The Web Share API is supported
    shareRefferCode.addEventListener("click", () => {
      navigator.share({
        title: "Get FoodShahi app-",
        url: "https://play.google.com/store/apps/details?id=com.riveredge.foodshahi",
        text: "Use referral code: R886B4890 while registration.",
      });
    });
  } else {
    // The Web Share API is not supported
    shareRefferCode.style.display = "none";
  }
}

// Checkebox
{
  let checkAllButtons = document.querySelectorAll(".checkeAll");

  checkAllButtons.forEach((checkAllButton) => {
    checkAllButton.addEventListener("click", function () {
      let container = checkAllButton.closest(".container");
      let checkboxes = container.querySelectorAll(".checkeBox");
      checkboxes.forEach((checkbox) => {
        checkbox.checked = checkAllButton.checked;
      });
    });
  });
}
