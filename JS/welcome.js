var welcome = document.querySelector("#welcome")
welcome.innerHTML = `Welcome ${name}`;
name = localStorage.getItem("userName");


var logOut = document.querySelector("#logOut")
logOut.addEventListener("click", function () {
    localStorage.removeItem("userName")
    console.log("hiiiiii");
    location.href = "../index.html"
})