let btn = document.getElementById("btn")
btn.addEventListener("mouseover", hey)
function hey() {
    btn.innerText = "Rasengan!!!"
    btn.style.backgroundColor = "red"
    btn.style.color = "#fff"
}