let world;
let gameLevel = 1;
let keyboard = new Keyboard();
let canvas = document.getElementById("canvas");
let soundsMuted = true;
let musicMuted = false;
level1 = "./img/9_intro_outro_screens/win/level_1.png";

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
}

function closePopup() {
  document.getElementById('popupBackground').classList.add('d-none');
  document.getElementById('help').classList.add('d-none');
  document.getElementById('legal').classList.add('d-none');
  document.getElementById('privacy').classList.add('d-none');
}

function openPopup(container) {
  document.getElementById('popupBackground').classList.remove('d-none');
  document.getElementById(container).classList.remove('d-none');
}

function muteMusic() {
  if (musicMuted) {
    musicMuted = false;
    start_game_over.muted = false;
    start_game_over.play();
    document.getElementById("musicNotMuted").style.display = "inline";
    document.getElementById("musicMuted").style.display = "none";
    document.getElementById("mobileMusicNotMuted").style.display = "inline";
    document.getElementById("mobileMusicMuted").style.display = "none";
  } else {
    musicMuted = true;
    start_game_over.muted = true;
    mariachi.muted = true;
    document.getElementById("musicNotMuted").style.display = "none";
    document.getElementById("musicMuted").style.display = "inline";
    document.getElementById("mobileMusicNotMuted").style.display = "none";
    document.getElementById("mobileMusicMuted").style.display = "inline";
  }
}

function muteSounds() {
  if (soundsMuted) {
    soundsMuted = false;
    if (!musicMuted && !soundsMuted) {
      start_game_over.muted = false;
      start_game_over.play();
    }
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

function level1Screen() {
  if (gameLevel == 1) {
    canvas.style.backgroundImage = 'url("' + level1 + '")';
    setTimeout(startGame, 2000);
  }
  else {
    startGame();
  }
}

function startGame() {
  clearAllIntervals();
  initLevel(gameLevel);
  if (soundsMuted) {
    rooster_crow.muted = true;
    start_game_over.muted = true;
  } else {
    if (level) {
      rooster_crow.muted = false;
      rooster_crow.volume = 0.1;
      rooster_crow.play();
      mariachi.muted = true;
      if (!musicMuted) {
        start_game_over.muted = false;
        start_game_over.play();
      }
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
