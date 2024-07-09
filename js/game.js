let canvas;
let world;
let keyboard = new Keyboard();
let mariachi = new Audio("./audio/mariachi.mp3");
// function init() {
//   delete world;
//   canvas = document.getElementById("canvas");
//   // setTimeout(()=>{world = new World(canvas, keyboard);  },1000);
//   world = new World(canvas, keyboard);
// }

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
}

function startGame() {
  delete world;
  // delete keyboard;
  // canvas = null;
  clearAllIntervals();
  initLevel();
  // mariachi.play();
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}



function fullscreen() {
  canvas.requestFullscreen();
}

document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
  e.preventDefault();
  keyboard.LEFT = true;
});

document.getElementById("btnLeft").addEventListener("touchend", (e) => {
  e.preventDefault();
  keyboard.LEFT = false;
});

document.getElementById("btnRight").addEventListener("touchstart", (e) => {
  e.preventDefault();
  keyboard.RIGHT = true;
});

document.getElementById("btnRight").addEventListener("touchend", (e) => {
  e.preventDefault();
  keyboard.RIGHT = false;
});



document.getElementById("btnJump").addEventListener("touchstart", (e) => {
  e.preventDefault();
  keyboard.SPACE = true;
});

document.getElementById("btnJump").addEventListener("touchend", (e) => {
  e.preventDefault();
  keyboard.SPACE = false;
});


document.getElementById("btnThrow").addEventListener("touchstart", (e) => {
  e.preventDefault();
  keyboard.D = true;
});

document.getElementById("btnThrow").addEventListener("touchend", (e) => {
  e.preventDefault();
  keyboard.D = false;
});


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
