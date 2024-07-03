let canvas;
let world;
let keyboard = new Keyboard();

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}


window.addEventListener("keydown", (e) => {
  // console.log(e.key);
  if (e.key == "ArrowLeft") {
    keyboard.LEFT = true;
  }

  if (e.key == "ArrowRight") {
    keyboard.RIGHT = true;
  }

  if (e.key == "ArrowDown") {
    keyboard.DOWN = true;
  }

  if (e.key == "ArrowUp") {
    keyboard.UP = true;
  }

  if (e.key == " ") {
    keyboard.SPACE = true;
  }

  if (e.key == "D" || e.key == "d") {
    keyboard.D = true;    
  }

});

// window.addEventListener("keyup", (e) => {
//     if (e.key == "ArrowLeft") {
//       keyboard.LEFT = true;
//     }
  
//     if (e.key == "ArrowRight") {
//       keyboard.RIGHT = true;
//     }
  
//     if (e.key == "ArrowDown") {
//       keyboard.DOWN = true;
//     }
  
//     if (e.key == "ArrowUp") {
//       keyboard.UP = true;
//     }
  
//     if (e.key == " ") {
//       keyboard.SPACE = true;
//     }
//   });


