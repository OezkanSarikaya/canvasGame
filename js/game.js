let world;
let gameLevel = 1;
let keyboard = new Keyboard();
let canvas = document.getElementById("canvas");
let soundsMuted = true;
let musicMuted = false;
let win = false;
level1 = "./img/9_intro_outro_screens/win/level_1.png";

/**
 * Clears all intervals.
 */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) {
    window.clearInterval(i);
  }
}

/**
 * Closes the popup.
 */
function closePopup() {
  document.getElementById("popupBackground").classList.add("d-none");
  document.getElementById("help").classList.add("d-none");
  document.getElementById("legal").classList.add("d-none");
  document.getElementById("privacy").classList.add("d-none");
}

/**
 * Opens the specified popup container.
 * @param {string} container - The ID of the container to open.
 */
function openPopup(container) {
  document.getElementById("popupBackground").classList.remove("d-none");
  document.getElementById(container).classList.remove("d-none");
}

/**
 * Mutes or unmutes the music.
 */
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

/**
 * Mutes or unmutes the sounds.
 */
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

/**
 * Displays the level 1 screen if the player wins.
 */
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

/**
 * Starts the game.
 */
function startGame() {
  clearAllIntervals();
  initLevel(gameLevel);
  if (soundsMuted) {
    start_game_over.pause();
  } else {
    switch (gameLevel) {
      case 1:
        rooster_crow.play();
        break;
      case 3:
        crickets.play();
        break;
    }
    mariachi.pause();
    if (!musicMuted && level) {
      start_game_over.muted = false;
      start_game_over.play();
    }
  }
  world = new World(canvas, keyboard);
}

/**
 * Enters fullscreen mode for the specified element.
 * @param {Element} element - The element to display in fullscreen mode.
 */
function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
  document.getElementById("canvas").classList.add("canvasFullscreen");
}

/**
 * Toggles fullscreen mode.
 */
function fullscreen() {
  let elem = document.getElementById("fullscreen");
  if (!document.fullscreenElement) {
    enterFullscreen(elem);
    document.getElementById("startFullscreen").classList.add("d-none");
    document.getElementById("exitFullscreen").classList.remove("d-none");
  } else {
    document.exitFullscreen();
    document.getElementById("startFullscreen").classList.remove("d-none");
    document.getElementById("exitFullscreen").classList.add("d-none");
  }
}

/**
 * Exits fullscreen mode.
 */
function closeFullscreen() {
  document.getElementById("canvas").classList.remove("canvasFullscreen");
  document.getElementById("startFullscreen").classList.remove("d-none");
  document.getElementById("exitFullscreen").classList.add("d-none");
}

/**
 * Adds touch listeners for the specified listener type.
 */
function touchListener() {
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
}

/**
 * Adds fullscreen Listener for exit fullscreen
 */
document.addEventListener("fullscreenchange", function () {
  if (!document.fullscreenElement) {
    closeFullscreen();
  }
});

/**
 * Adds keyboard event listeners for the specified listener type.
 * @param {string} listener - The type of event listener (e.g., "keydown", "keyup").
 */
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

touchListener();
keyboardListener("keydown");
keyboardListener("keyup");

/**
 * Keylistener for Escape for exit fullscreen
 */

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
    document.getElementById("canvas").classList.remove("canvasFullscreen");
    document.getElementById("startFullscreen").classList.remove("d-none");
    document.getElementById("exitFullscreen").classList.add("d-none");
  }
});
