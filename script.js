const board = document.getElementById("board");
const placeShipsButton = document.getElementById("placeShips");

let shipPositions = [];
let hit = 0;

function startgame(){
  shipPositions = [];
  hit = 0 ;
}
//hello

for (let i = 0; i < 25; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("data-index", i);
  cell.setAttribute("data-isship",((i == 3 ||i == 5 ||i == 10) ? true : false));
  board.appendChild(cell);
}
let isShipArray = []; 
function randomShipPlaces(a,b) {
  while (3 > isShipArray.length){
    var randomNumber = Math.floor(Math.random() * 25)
    if(!isShipArray.includes(randomNumber)){
      isShipArray.push(randomNumber) 
      }
  }
  return(isShipArray);
}
randomShipPlaces(0,25);
console.log(isShipArray);






