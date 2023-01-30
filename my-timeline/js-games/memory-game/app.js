const cardArray = [
    {
        name: 'bear',
        img: 'img-src/bear.jpg'
    },
    {
        name: 'bird',
        img: 'img-src/bird.jpg'
    },
    {
        name: 'cat',
        img: 'img-src/cat.jpg'
    },
    {
        name: 'dog',
        img: 'img-src/dog.jpg'
    },
    {
        name: 'fish',
        img: 'img-src/fish.jpg'
    },
    {
        name: 'fox',
        img: 'img-src/fox.jpg'
    },
    {
        name: 'lion',
        img: 'img-src/lion.jpg'
    },
    {
        name: 'owl',
        img: 'img-src/owl.jpg'
    },
    {
        name: 'rabbit',
        img: 'img-src/rabbit.jpg'
    },
    {
        name: 'wolf',
        img: 'img-src/wolf.jpg'
    },
    {
        name: 'bear',
        img: 'img-src/bear.jpg'
    },
    {
        name: 'bird',
        img: 'img-src/bird.jpg'
    },
    {
        name: 'cat',
        img: 'img-src/cat.jpg'
    },
    {
        name: 'dog',
        img: 'img-src/dog.jpg'
    },
    {
        name: 'fish',
        img: 'img-src/fish.jpg'
    },
    {
        name: 'fox',
        img: 'img-src/fox.jpg'
    },
    {
        name: 'lion',
        img: 'img-src/lion.jpg'
    },
    {
        name: 'owl',
        img: 'img-src/owl.jpg'
    },
    {
        name: 'rabbit',
        img: 'img-src/rabbit.jpg'
    },
    {
        name: 'wolf',
        img: 'img-src/wolf.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const stepsDisplay = document.querySelector('#steps')
const machineTextDisplay = document.querySelector('#machine-text')
let cardsChosen = []
let cardsChosenIds = []
let stepsCounter = 0;
let machineText = 'nothing'
const cardsWon = []

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('data-id', i)
        card.setAttribute('src', 'img-src/blank.jpg')
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        // alert("You've clicked the same image")
        machineTextDisplay.textContent = "You've clicked the same image"
        cards[optionOneId].setAttribute('src', 'img-src/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'img-src/blank.jpg')
    }else if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'img-src/found.jpg')
        cards[optionTwoId].setAttribute('src', 'img-src/found.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        machineTextDisplay.textContent = "Nice, go on!"
    } else {
        cards[optionOneId].setAttribute('src', 'img-src/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'img-src/blank.jpg')
        // alert("Try again")
        machineTextDisplay.textContent = "No luck, try again!"
    }
    
    stepsCounter++
    resultDisplay.textContent = cardsWon.length
    stepsDisplay.textContent = stepsCounter
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length / 2) {
        machineTextDisplay.textContent = 'Congrats ya found em all.'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}