const btnLogin = document.querySelector(".login-head");
const formLogin = document.getElementById("form");
const btnClose = document.querySelector(".remove ");

const registerlink = document.getElementById("registerlink");
const loginlink = document.getElementById("loginlink");
const formContact = document.getElementById("form");

btnLogin.addEventListener("click", function () {
  formLogin.classList.add("removeall");
});

btnClose.addEventListener("click", function () {
  formLogin.classList.remove("removeall");
});

registerlink.addEventListener("click", function () {
  formContact.classList.add("active-form");
});

loginlink.addEventListener("click", function () {
  formContact.classList.remove("active-form");
});

