let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  //set up the grid in HTML
  for (let i = 0; i < 9; i++) {
    //setting the div id from 0 to 8 -- to check which id is clicked
    let tile = document.createElement('div');
    tile.id = i.toString();
    tile.addEventListener('click', selectTile);
    //we are taking the 9 tags and accesing with id board and inserting the tags in the div tag
    document.getElementById('board').appendChild(tile);
  }
  setInterval(setMole, 2000); // every 2seconds its going to be called & will set the mole to the tile
  setInterval(setPlant, 5000);
}

function getRandomTile() {
  //randomly generates numbers between 0-9
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }

  if (currentMoleTile) {
    currentMoleTile.innerHTML = '';
  }

  let mole = document.createElement('img');
  mole.src = './monty-mole.png';

  let num = getRandomTile();

  if (currentPlantTile && currentPlantTile.id == num) {
    return;
  }
  currentMoleTile = document.getElementById(num);
  currentMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }

  if (currentPlantTile) {
    currentPlantTile.innerHTML = '';
  }
  let plant = document.createElement('img');
  plant.src = './piranha-plant.png';

  let num = getRandomTile();

  if (currentMoleTile && currentMoleTile.id == num) {
    return;
  }
  currentPlantTile = document.getElementById(num);
  currentPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }

  if (this == currentMoleTile) {
    score += 10;
    document.getElementById('score').innerHTML = score.toString(); // To Update the score
  } else if (this == currentPlantTile) {
    document.getElementById('score').innerText =
      'GAME OVER : ' + score.toString();
    gameOver = true;
  }
}
