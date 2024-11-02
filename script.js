"use strict"
const board = document.getElementById("board");
const placeShipsButton = document.getElementById("placeShips");

let shipPositions = [];
let hit;

startgame();

function hitCell(event) {
  let clicked = event.target;
  let check = JSON.parse(clicked.getAttribute("data-isShip"));
  console.log(hit);
  hit--;
  
  if (check === true) {
    clicked.classList.add("shipSink");
  } else {
    clicked.classList.add("noShipSink");
  }
  if(hit == 0) {
    setTimeout(function(){
    alert('game over!');
    startgame();
    },10);
  }
}

function startgame() {
  hit = 3;
  board.innerHTML = "";
  shipPositions = [];
  let isShipArray = randomShipPlaces();

  for (let i = 0; i < 25; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", i);
    cell.setAttribute("data-isShip", isShipArray.includes(i) ? true : false);
    board.appendChild(cell);
    cell.addEventListener("click", hitCell);
  }
}

placeShipsButton.addEventListener("click", startgame);

function randomShipPlaces() {
  let isShipArray = [];
  while (3 > isShipArray.length) {
    var randomNumber = Math.floor(Math.random() * 25);
    if (!isShipArray.includes(randomNumber)) {
      isShipArray.push(randomNumber);
    }
  }
  return isShipArray;
}
