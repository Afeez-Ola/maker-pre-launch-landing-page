const Form = document.getElementById("form");
const email = document.getElementById("email").value;
const submitButton = document.getElementById("submitButton");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorMessage = document.getElementById("errorMessage")

Form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail()
})

function validateEmail(){
  if (!emailPattern.test(email)) {
    errorMessage.classList.remove("hidden")
    return false
  }

  errorMessage.classList.add("hidden")
  return true
}

