document.getElementById("user-login").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username1").value;
    const password = document.getElementById("password1").value;

    if (username === "admin" && password === "admin123") {
        window.location.href = "login.html";
    } else {
        window.location.href = "https://google.com";
    }
});