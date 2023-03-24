let func = 0
const decre = () => {
    func = func - 1
    return func
}

function DecrementBy1(x) {
    document.getElementById("count").innerText = decre()
}

const incren = () => {
    func = func + 1
    return func
}

function IncrementBy1(x) {
    document.getElementById("count").innerText = incren()
}

const reset = () => {
    func = 0
    return func
}

function Reset(x) {
    document.getElementById("count").innerText = reset()
}