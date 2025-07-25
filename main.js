const form = document.getElementById("form");
const submitButton = document.getElementById("submitButton");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorMessage = document.getElementById("errorMessage")

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail()
})

function validateEmail(){
  const email = document.getElementById("email").value.trim();
  console.log(email)
  if (!emailPattern.test(email)) {
    errorMessage.classList.remove("hidden")
    return false
  }
  errorMessage.classList.remove("hidden")
  errorMessage.innerText = "You have successfully signed up!"
  errorMessage.classList.add("text-green-400")
  return true
}

