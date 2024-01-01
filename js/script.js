document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector(".emailInput");
  const subscribeButton = document.querySelector(".subscribe");
  const signUp = document.querySelector(".sign-up-card");
  const successSubscribe = document.querySelector(".success-subscribe-card");

  emailInput.addEventListener("keyup", () => {
    testEmail();
  });

  subscribeButton.addEventListener("click", () => {
    testEmail();
  });
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function testEmail() {
    const emailValidation = document.querySelector(".valid-email-text");
    let email = emailInput.value;
    if (!isValidEmail(email)) {
      emailValidation.style.display = "block";
      emailInput.style.backgroundColor = "#ffe8e6";
      emailInput.style.border = "1px solid #fa5a62";
      emailInput.style.color = "#fa5a62";
    } else {
      signUp.style.display = "none";
      successSubscribe.style.display = "block";
    }
  }
});
