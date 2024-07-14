let world;
let gameLevel = 1;
let keyboard = new Keyboard();
let canvas = document.getElementById("canvas");
let soundsMuted = true;
let musicMuted = false;
let win = false;
level1 = "./img/9_intro_outro_screens/win/level_1.png";

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
}

function closePopup() {
  document.getElementById("popupBackground").classList.add("d-none");
  document.getElementById("help").classList.add("d-none");
  document.getElementById("legal").classList.add("d-none");
  document.getElementById("privacy").classList.add("d-none");
}

function openPopup(container) {
  document.getElementById("popupBackground").classList.remove("d-none");
  document.getElementById(container).classList.remove("d-none");
}

function muteMusic() {
  if (musicMuted) {
    musicMuted = false;
    if (!soundsMuted) {
    start_game_over.play();
    }
    document.getElementById("musicNotMuted").style.display = "inline";
    document.getElementById("musicMuted").style.display = "none";
    document.getElementById("mobileMusicNotMuted").style.display = "inline";
    document.getElementById("mobileMusicMuted").style.display = "none";
  } else {
    musicMuted = true;
    start_game_over.pause();
    mariachi.pause(); 
    document.getElementById("musicNotMuted").style.display = "none";
    document.getElementById("musicMuted").style.display = "inline";
    document.getElementById("mobileMusicNotMuted").style.display = "none";
    document.getElementById("mobileMusicMuted").style.display = "inline";
  }
}

function muteSounds() {
  if (soundsMuted) {
    soundsMuted = false;
    if (!musicMuted && level) {
      start_game_over.muted = false;
      start_game_over.play();
    }
    document.getElementById("mobileMuted").style.display = "none";
    document.getElementById("mobileNotMuted").style.display = "inline";
    document.getElementById("muted").style.display = "none";
    document.getElementById("notMuted").style.display = "inline";
  } else {
    soundsMuted = true;
    start_game_over.pause();
    mariachi.pause();
    document.getElementById("mobileNotMuted").style.display = "none";
    document.getElementById("mobileMuted").style.display = "inline";
    document.getElementById("muted").style.display = "inline";
    document.getElementById("notMuted").style.display = "none";
  }
}

function level1Screen() {
  if (win) {
    gameLevel = 1;
    win = false;
  }
  if (gameLevel == 1) {
    canvas.style.backgroundImage = 'url("' + level1 + '")';
    setTimeout(startGame, 2000);
  } else {
    startGame();
  }
}

function startGame() {
  clearAllIntervals();
  initLevel(gameLevel);
  if (soundsMuted) {
    start_game_over.pause();
  } else {
    if (gameLevel == 1) {
      rooster_crow.volume = 0.5;
      rooster_crow.play();
    }
    mariachi.pause();
    if (!musicMuted && level) {
      start_game_over.muted = false;
      start_game_over.play();
    }
  }
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

function keyboardListener(listener) {
  let keyPressed = listener == "keydown" ? true : false;
  window.addEventListener(listener, (e) => {
    if (e.keyCode == 37) {
      keyboard.LEFT = keyPressed;
    }
    if (e.keyCode == 39) {
      keyboard.RIGHT = keyPressed;
    }
    if (e.keyCode == 32) {
      keyboard.SPACE = keyPressed;
    }
    if (e.keyCode == 68) {
      keyboard.D = keyPressed;
    }
  });
}

keyboardListener("keydown");
keyboardListener("keyup");
