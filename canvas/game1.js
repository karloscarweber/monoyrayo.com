
// Lets make a short little game with the canvas element

// http://www.html5rocks.com/en/tutorials/canvas/notearsgame/

// Create the canvas
var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;
var canvasElement = $("<canvas width='" + CANVAS_WIDTH + 
  "' height='" + CANVAS_HEIGHT + "'></canvas>");
var canvas = canvasElement.get(0).getContext("2d");
canvasElement.appendTo('body');


// The Game Loop
var FPS = 60;
setInterval(function() {
  update();
  draw();
}, 1000/FPS); // or 60 times a second.

var textX = 50;
var textY = 50;



function update() {
  if (keydown.left) {
    player.x -=2;
  }

  if (keydown.right) {
    player.x +=2;
  }

  if (keydown.up) {
    player.y -=2;
  }

  if (keydown.down) {
    player.y +=2;
  }

}


function draw() {

  canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.draw();
}


// Create the Player
var player = {
  color: "#00A",
  x: 220,
  y: 270,
  width: 32,
  height:32,
  draw: function() {
    canvas.fillStyle = this.color;
    canvas.fillRect(this.x, this.y, this.width, this.height);
  }

};




