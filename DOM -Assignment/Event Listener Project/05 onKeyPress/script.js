let inp = document.getElementById("input")
let para = document.getElementById("para")
inp.addEventListener("keypress", key)

function key(event) {
    para.textContent += "key " + event.key + " "
}