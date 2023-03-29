function check() {
    if ((localStorage.check != localStorage.keys) || localStorage.keys <= 0) {
        alert("Incorrect Login Credentials")
    }
}