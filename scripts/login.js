let value;
valueR = random(1, 1000000000000000000000000000000000)
localStorage.keys = 0
function submit() {
    if (true) {
        localStorage.keys = value
        localStorage.check = value
        window.location.href = "./home.html"
    }
    else {
        localStorage.check = value
    }
    let name = document.getElementById("username").value
    let pwd = document.getElementById("password").value
}

function clear() {
    localStorage.clear()
}

function random(min, max) {
    value = Math.floor(Math.random() * (max - min + 1)) + min;
}
