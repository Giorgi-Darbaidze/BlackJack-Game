let number = document.getElementById('count')
let btn = document.getElementById('btn')
let save = document.getElementById('save')
let log = document.getElementById('log')

let count = 0
btn.addEventListener('click', add)
save.addEventListener('click', Save)

function add() {
    count += 1
    number.innerText = count
}

function Save() {
    let countStr = count + ' - '
    log.textContent += countStr
    number.textContent = 0
    count = 0
}