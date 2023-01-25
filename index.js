const btn = document.getElementById('btn')
const btn2 = document.getElementById('btn2')
btn.addEventListener('click', renderGame)
btn2.addEventListener('click', newCard)

let cards = document.getElementById('card')
let message = document.getElementById('message-el')
let player_el = document.getElementById('player_el')
let sum_el = document.getElementById('sum')

let firstCard = randomNumber()
let secondCard = randomNumber()
let sum = firstCard + secondCard
let all_cards = [firstCard, secondCard]
let isAlive = false
let player = {
  name: 'George',
  chips: 145
}
player_el.textContent = player.name + ': $' + player.chips

function randomNumber() {
  let randomNum = Math.floor( Math.random() * 13) + 1

  if (randomNum > 10) {
      return 10
  }
  else if (randomNum === 1) {
    return 11
  }
  else {
    return randomNum
  }
}

function renderGame() {

  if (sum <= 20) {
    isAlive = true
    message.textContent = "Do you wanna draw a new card?"
    sum_el.textContent = sum

    for (let i = 0; i < all_cards.length; i++) {
      cards.textContent += all_cards[i] + ' '
    }
  }

  else if (sum === 21) {
    message.textContent = "You've got a BlackJack!"
    sum_el.textContent = sum

    for (let i = 0; i < all_cards.length; i++) {
      cards.textContent += all_cards[i] + ' '
    }
    isAlive = false
    player.chips = 50000
    player_el.textContent = player.name + ': $' + player.chips
  }

  else {
    for (let i = 0; i < all_cards.length; i++) {
      cards.textContent += all_cards[i] + ' '
    }
    sum_el.textContent = sum
    message.textContent = "You are out!"
    btn.textContent = "TRY AGAIN"
    isAlive = false
  }
}

function newCard() {
  if (isAlive === true) {
    let NewCard = randomNumber()
    all_cards.pop()
    all_cards.shift()
    all_cards.push(NewCard)
    sum += NewCard
    renderGame()
  }
}
