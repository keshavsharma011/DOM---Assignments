let inp = document.getElementById("input")
let para = document.getElementById("para")
inp.addEventListener("keyup", keyUp)
inp.addEventListener("keydown", keyDown)

function keyUp(event) {
    para.style.color = "green"
    para.textContent += "keyUp" + event.key + " "
}

function keyDown(event) {
    para.style.color = "red"
    para.textContent += "keyDown " + event.key + " "
}