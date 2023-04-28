console.log("JS IS RUNNING");

//canvas initialization
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//create the player
const player = new Player(10, 200, 60, 60, "orange", ctx);

//audio variable declaration
const bgMusic = new Audio("docs/assets/sounds/bgmusic.mp3");
bgMusic.volume = 0.2;
const gameOverSound = new Audio("docs/assets/sounds/gameover.mp3");
gameOverSound.volume = 0.5;
const eatingSound = new Audio("docs/assets/sounds/chomp.mp3");
const eatingVeggiesSound = new Audio("docs/assets/sounds/ew.mp3");

//mute audio
/* mute.onclick = function pauseAudio(){
bgMusic.muted = true;
eatingSound.muted = true;
eatingVeggiesSound.muted = true;
gameOverSound.muted = true;
}; */

mute.onclick = function pauseAudio() {
  if (bgMusic.muted) {
    // audio is currently muted, so unmute it
    bgMusic.muted = false;
    eatingSound.muted = false;
    eatingVeggiesSound.muted = false;
    gameOverSound.muted = false;
  } else {
    // audio is currently unmuted, so mute it
    bgMusic.muted = true;
    eatingSound.muted = true;
    eatingVeggiesSound.muted = true;
    gameOverSound.muted = true;
  }
};
 
//create new game
const game = new Game(ctx, canvas.width, canvas.height, player);

//function to start game
function startGame() {
if(!game.gameRunning){
  console.log("starting");
  game.start();
  game.gameRunning = true;
} else {
  game.reset();
  game.update();
}
};

//execute start game function when tapping the spacebar
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 32) { // spacebar
    startGame();
  }
});

//execute restart game function when tapping the R button
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 82) { // reset button
    game.reset()
    game.start();
  }
});

//movement keys for the player
document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      if (player.direction !== "down") {
        player.speedX = 0;
        player.speedY = -5;
        player.direction = "up";
        player.image.src = 'docs/assets/img/garfieldheadup.png';
        player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
      }
      break;
    case "ArrowDown":
      if (player.direction !== "up") {
        player.speedX = 0;
        player.speedY = 5;
        player.direction = "down";
        player.image.src = 'docs/assets/img/garfieldheaddown.png';
        player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
      }
      break;
    case "ArrowLeft":
      if (player.direction !== "right") {
        player.speedX = -5;
        player.speedY = 0;
        player.direction = "left";
        player.image.src = 'docs/assets/img/garfieldheadleft.png';
        player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
      }
      break;
    case "ArrowRight":
      if (player.direction !== "left") {
        player.speedX = 5;
        player.speedY = 0;
        player.direction = "right";
        player.image.src = 'docs/assets/img/garfieldheadright.png';
        player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
      }
      break;
  }
});