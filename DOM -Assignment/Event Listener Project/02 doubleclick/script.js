let btn = document.getElementById("btn")
btn.addEventListener("dblclick", hey)
function hey() {
    btn.innerText = "You double Clicked Me!!!"
    btn.style.backgroundColor = "red"
    btn.style.color = "#fff"
}