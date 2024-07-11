let canvas;
let world;
// let level;
let keyboard = new Keyboard();
// let mariachi = new Audio("./audio/mariachi.mp3");
let soundsMuted = true;
// console.log(mariachi);

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
}

function muteSounds() {
  // soundsMuted = soundsMuted ? false : true;
if (soundsMuted) {
  soundsMuted = false;
  start_game_over.muted = false;
  start_game_over.play();
  document.getElementById("mobileMuted").style.display = "none";
  document.getElementById("mobileNotMuted").style.display = "inline";
} else {
  soundsMuted = true;
  start_game_over.muted = true;
  mariachi.muted = true;
  document.getElementById("mobileNotMuted").style.display = "none";
  document.getElementById("mobileMuted").style.display = "inline";
}
  

  if (document.getElementById("muted")) {
    if (soundsMuted) {
      document.getElementById("muted").style.display = "inline";
      
      
    } else {
      document.getElementById("muted").style.display = "none";
     
    }
  }

  if (document.getElementById("notMuted")) {
    if (soundsMuted) {
      document.getElementById("notMuted").style.display = "none";
    } else {
      document.getElementById("notMuted").style.display = "inline";
    }
  }
}

function startGame() {
  delete world;
  // delete keyboard;
  // canvas = null;

  clearAllIntervals();
  initLevel();
  
  if (soundsMuted) {
    // this.chick_sound2.pause();
    rooster_crow.muted = true;
    start_game_over.muted = true;
    // start_game_over.pause();
  } else {
    if (level1) {
      rooster_crow.muted = false;
      rooster_crow.volume = 0.1;
      rooster_crow.play();
      mariachi.muted = true;
      start_game_over.muted = false;
      start_game_over.play();
    }
  }

  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
}

// function playSound(sound) {
//   // const sound = new Audio("./audio/"+file+".mp3");
//   if (soundsMuted) {
//     sound.muted = true;
//   } else {
//     sound.muted = false;
//     sound.play();
//   }
// }

function fullscreen() {
  canvas.requestFullscreen();
}

// muteSounds();

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
