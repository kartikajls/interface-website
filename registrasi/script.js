document.getElementById("user-registrasi").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name1").value;
    const email = document.getElementById("email1").value;
    const password = document.getElementById("password1").value;

    if (name === "" || email === "" || password === "") {
        alert("Semua Data Harus Diisi");
    } else {
        alert("Registrasi Berhasil");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

    }


});