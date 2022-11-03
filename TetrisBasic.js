//bare with me

let canvas; //reference to canvas; what we will be drawing on
let ctx; //reference to our context; functions for drawing on canvas
let gBArrayHeight = 20; //gameboard array height
let gBArrayWidth = 12; //gameboard array width
let startX = 4; //draw shapes
let startY = 0; //down 0
let coordinateArray = [...Array(gBArrayHeight)].map((e) =>
  Array(gBArrayWidth).fill(0)
);

let curTetromino = [ //current tetromino holds coordinates of a tetris shape
  [1, 0],
  [0, 1],
  [1, 1],
  [2, 1],
]; 

let tetrominos = [];
let tetrominoColors = [
  'purple',
  'cyan',
  'blue',
  'yellow',
  'orange',
  'green',
  'red',
]; //all possible colors
let curTetrominoColor;

/* class made up of coordinates of x and y, which will match with our coordinate array which will look up where 
   we want to draw our tetrimominos */
class Coordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

document.addEventListener('DOMContentLoaded', SetupCanvas); //wait for event, once event occurs it will call SetupCanvas

//creates coordinate array
function CreateCoordArray() {
  let i = 0,
    j = 0; //create variables to rep x and y values to populate array
  for (let y = 9; y <= 446; y += 23) {
    // 9px by 446px that will rep the max values from the top of screen to the bottom
    for (let x = 11; x <= 264; x += 23) {
      //11px by 264px from left to right foe drawing squares to screen
      coordinateArray[i][j] = new Coordinates(x, y); //stores coordinates
      i++;
    }
    j++;
    i = 0;
  }
}

function SetupCanvas() {
  canvas = document.getElementById('my-canvas'); //references html element <canvas='my-canvas'>
  ctx = canvas.getContext('2d'); //provides all functions for drawing on canvas
  canvas.width = 936; //
  canvas.height = 956;

  ctx.scale(2, 2); //zooms in elements by 2

  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'black';
  ctx.strokeRect(8, 8, 280, 462);

  CreateCoordArray();
  DrawTetromino();
}

function DrawTetromino() {
  for (let i = 0; i < curTetromino.length; i++) {
    let x = curTetromino[i][0] + startX;
    let y = curTetromino[i][1] + startY;
  }
}
