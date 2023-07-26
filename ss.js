document.addEventListener("DOMContentLoaded", function () {
  const signUpForm = document.querySelector("form");

  signUpForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(signUpForm);
    for (let [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  });
});
