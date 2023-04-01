function submit() {
    let name = document.getElementById("username").value
    let pwd = document.getElementById("password").value
    const form_data = { password: pwd, username: name }
    const url = "http://localhost:3000/admin/login"
    fetch(url, {
        method: "POST",
        // credentials: "include",
        body: JSON.stringify(form_data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (response.status == "200") {
                // alert("logged in")
                window.location.href = "./home.html"
            }
            else {
                alert("it shouldve worked")
            }
        });
}