
/*JAVASCRIPT*/

/*Constant because they will not change*/
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
/*"e" mouse event that represents the click*/
loginButton.addEventListener("click", (e) => {
  e.preventDefault();/*This prevents submission*/
  const username = loginForm.username.value;
  const password = loginForm.password.value;
  /*if (username === && password === ){
    alert("Success");
    location.reload(); // go to our main menu
  
  }else {
    loginErrorMsg.style.opacity = 1;
  }*/
  
})