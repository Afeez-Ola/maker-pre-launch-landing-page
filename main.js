const Form = document.getElementById("form");
const submitButton = document.getElementById("submitButton");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorMessage = document.getElementById("errorMessage")

Form.addEventListener("submit", (e) => {
  if (!validateEmail) {
  e.preventDefault();
  }
})
function validateEmail(){
  const email = document.getElementById("email").value;
  if (!emailPattern.test(email)) {
    errorMessage.classList.remove("hidden")
    return false
  }
  errorMessage.classList.add("hidden")
  return true
}

