var form = document.getElementById("newprod");
function submitData() {
    const url = "http://localhost:3000/products/"
    fetch(url, {
        method: "POST",
        body: new FormData(form),
    })
        .then((response) => response.json())
        .then((jsonRes) => {
            alert(jsonRes.msg);
        });
}

