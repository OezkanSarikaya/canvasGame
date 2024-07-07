let canvas;
let world;
let keyboard = new Keyboard();
let mariachi = new Audio("./audio/mariachi.mp3");
function init() {
  delete world;
  canvas = document.getElementById("canvas");
  // setTimeout(()=>{world = new World(canvas, keyboard);  },1000);
  world = new World(canvas, keyboard);  
}

function startGame() {
// delete world;
// delete keyboard;
// canvas = null;
canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

function fullscreen() {

  canvas.requestFullscreen();
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }

  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = true;
    // mariachi.play(); 
  }

  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }

  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }

  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});
