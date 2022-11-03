let canvas; //reference to canvas; what we will be drawing on
let ctx; //reference to our context; functions for drawing on canvas
let gBArrayHeight = 20; //gameboard array height
let gBArrayWidth = 12; //gameboard array width
let startX = 4; //draw shapes
let startY = 0; //down 0
let coordinateArray = [...Array(gBArrayHeight)].map(e => Array(gBArrayWidth).fill(0));
let curTetromino = [[1,0], [0,1], [1,1], [2,1]]; //current tetromino holds coordinates of a tetris shape

/* class made up of coordinates of x and y, which will match with our coordinate array which will look up where 
   we want to draw our tetrimominos */
class Coordinates{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

document.addEventListener('DOMContentLoaded', SetupCanvas); //wait for event, once event occurs it will call SetupCanvas

function CreateCoordArray(){
    let i = 0, j = 0;
    for(let y = 9; y <= 446; y += 23){
        for(let x = 11; x<= 264; x += 23){
            coordinateArray[i][j] = new Coordinates(x,y);
            i++;
        }
        j++;
        i = 0;
    }
}