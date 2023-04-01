function submitData() {
    const token = sessionStorage.getItem("token")
    console.log(token)
    let form_data = {
        name : $("#c-name").val(),
        description : $("#c-desc").val(),
        price : $("#c-price").val(),
        token
    }
    const url = "http://localhost:3000/products/"
    fetch(url, {
        method: "POST",
        body: JSON.stringify(form_data),
        headers : {
            "Content-Type" : "application/json",
        }
    })
        .then((response) => response.json())
        .then((jsonRes) => {
            // Do what you wanna after a product is added
            alert(jsonRes.msg);
        });
}

$(".change").on('click', (e) => {
    e.preventDefault()
    submitData()
})