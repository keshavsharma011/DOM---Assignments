let btn = document.getElementById("btn")
btn.addEventListener("mouseover", hey)
btn.addEventListener("mouseout", hello = () => {
    btn.innerText = "Where are you going my Friend ?"
    btn.style.backgroundColor = "blue"
})
function hey() {
    btn.innerText = "Stay here, Lets watch Anime !!!"
    btn.style.backgroundColor = "red"
    btn.style.color = "#fff"
}