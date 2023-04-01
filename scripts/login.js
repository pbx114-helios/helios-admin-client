function submit() {
    let name = document.getElementById("username").value;
    let pwd = document.getElementById("password").value;
    const form_data = { password: pwd, username: name };
    const url = "http://localhost:3000/admin/login";
    fetch(url, {
        method: "POST",
        body: JSON.stringify(form_data),
        headers: {
            "Content-Type": "application/json",
            "SameSite" : "None"
        },
    })
        .then((res) => {
            if (res.status == "200") {
                return res.json();
            }else{
                alert("it shouldve worked");
            }
        })
        .then((response) => {
            alert("logged in");
            sessionStorage.setItem("token", response.token)
        });
}
