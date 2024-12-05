"use strict";
const board = document.getElementById("board");
const placeShipsButton = document.getElementById("placeShips");
let cell;
let shipPositions = [];
let hit, score;
let minuet, seconds;
// GAME IS NOT STOPPED
let isGameStop = true;
function stopGame() {
  //STOP THE GAME
  if (!isGameStop) {
    alert("game over!");
    document.getElementById("demo").innerHTML = `Your score 3/${score}`;
    board.classList.add("disabled");
    isGameStop = true;
  }
}

let timerAction = GetTimerAction();
function GetTimerAction() {
  isGameStop = false;
  let intervalFunc;
  return timerAction;
  function timerAction() {
    if (intervalFunc) {
      clearInterval(intervalFunc);
    }
    minuet = 0;
    seconds = 10;
    function setTimerFunc() {
      document.getElementById("minuet").innerHTML = minuet;
      document.getElementById("second").innerHTML = seconds;
    }
    setTimerFunc();
    intervalFunc = setInterval(() => {
      if (seconds > 0) {
        seconds--;
      } else if (minuet > 0) {
        minuet--;
        seconds = 59;
      }

      if (minuet == 0 && seconds == 0) {
        clearInterval(intervalFunc);
        setTimeout(stopGame(), 0);
      }
      setTimerFunc();
    }, 1000);
  }
}

board.addEventListener("click", timerAction, { once: true });
function hitCell(event) {
  let clicked = event.target;
  let check = JSON.parse(clicked.getAttribute("data-isShip"));
  hit--;
  Number(minuet, seconds);
  if (check === true) {
    clicked.classList.add("shipSink");
    score++;
  } else {
    clicked.classList.add("noShipSink");
  }

  if (hit == 0) {
    setTimeout(function () {
      stopGame();
    }, 10);
  }
}

function startgame() {
  isGameStop = false;
  score = 0;
  hit = 3;
  board.innerHTML = "";
  shipPositions = [];
  board.classList.remove("disabled");
  let isShipArray = randomShipPlaces();

  for (let i = 0; i < 25; i++) {
    cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-index", i);
    cell.setAttribute("data-isShip", isShipArray.includes(i) ? true : false);
    board.appendChild(cell);
    cell.addEventListener("click", hitCell, { once: true });
  }
}
//Add a function that makes random number without conflict
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
startgame();
placeShipsButton.addEventListener("click", startgame);
