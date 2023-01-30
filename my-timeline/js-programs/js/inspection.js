const img = document.getElementById("img");
const firstName = document.getElementById("name");
const position = document.getElementById("position");
const started = document.getElementById("started");
const hobby = document.getElementById("hobby");

const data = [
    {
        img: "https://placekitten.com/150/150",
        name: "Cicó",
        position: "CEO",
        started: "2000.01.01",
        hobby: "Walking, Being"
    }, {
        img: "https://placekitten.com/149/150",
        name: "Cirmus",
        position: "Boss",
        started: "2005.11.24",
        hobby: "Chilling"
    }, {
        img: "https://placekitten.com/148/150",
        name: "Cicmic",
        position: "Leader",
        started: "20014.01.16",
        hobby: "Netflix & Chill"
    }, {
        img: "https://placekitten.com/151/150",
        name: "Csalfa",
        position: "Assistant",
        started: "2001.10.01",
        hobby: "Sleeping"
    }, {
        img: "https://placekitten.com/152/150",
        name: "Csinos",
        position: "IT Support",
        started: "2022.02.20",
        hobby: "Hunting"
    }

]

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", showCard())

function showCard(){
    const item = data[currentItem];
    img.src = item.img;
    firstName.textContent = item.name;
    position.textContent = item.position;
    started.textContent = item.started;
    hobby.textContent = item.hobby;
}

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > data.length - 1){
        currentItem = 0;
    }
    showCard();
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = data.length - 1;
    }
    showCard();
});

