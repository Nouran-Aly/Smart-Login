var signUp = document.querySelector("#signUp");
var nameField = document.querySelector("#name");
var emailField = document.querySelector("#email");
var passwordField = document.querySelector("#password");
var warning = document.querySelector("#warning");
var signUpBtn = document.querySelector("#sign-btn");
var logInBtn = document.querySelector("#login-btn")
var user



if (localStorage.getItem("user") !== " ") {
    user = JSON.parse(localStorage.getItem("user"))
    console.log("hii");
} else {
    user = []
}

signUp.addEventListener("click", function (e) {
    e.preventDefault();
    nameField.classList.replace("d-none", "d-flex")
    signUp.innerHTML = "Sign in";
    signUpBtn.classList.replace("d-none", "d-flex")
    logInBtn.classList.replace("d-flex", "d-none")
})

signUpBtn.addEventListener("click", function add() {
    if (nameField.value == "" || emailField.value == "" || passwordField.value == "") {
        warning.classList.add("text-danger")
        warning.innerHTML = "All inputs are required"
    }
    else {
        var object = {
            name: nameField.value,
            email: emailField.value,
            password: passwordField.value
        }
        user.push(object);
        localStorage.setItem("user", JSON.stringify(user));
        nameField.classList.replace("d-flex", "d-none")
        signUp.innerHTML = "Sign up";
        logInBtn.classList.replace("d-none", "d-flex")
        signUpBtn.classList.replace("d-flex", "d-none")
    }
})

logInBtn.addEventListener("click", function () {
    checkUser();
})



function checkUser() {
    for (let i = 0; i < user.length; i++) {
        if (emailField.value == user[i].email && passwordField.value == user[i].password) {
            var userName = user[i].name;
            localStorage.setItem("userName", userName)
            location.href = `../welcome.html`
        }
    }
}

