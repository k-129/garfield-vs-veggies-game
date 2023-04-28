class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.intervalId = null;
    this.frames = 0;
    this.food = [];
    this.veggies = [];
    this.score = 0;
    this.gameRunning = false
  }

  start() {
    this.intervalId = setInterval(this.update, 20); 
    bgMusic.play();
    bgMusic.loop = true; 
  }

  reset(){
    this.intervalId = null;
    this.frames = 0;
    this.food = [];
    this.veggies = [];
    this.score = 0;
    this.player.x = 10
    this.player.y = 200
    this.player.speedX = 0
    this.player.speedY = 0
    this.player.playerDead = false
  }

  update = () => {
    this.frames++;
    this.clear();
    this.player.newPos();
    this.player.draw();
    this.updateFood();
    this.grabFood();
    this.updateVeggies();
    this.grabVeggies();
    this.checkGameOver();
    this.getHighScore();
    if (this.score >= 30) {
      document.addEventListener("keydown", (e) => {
        switch (e.code) {
          case "ArrowUp":
            if (player.direction !== "down") {
              player.speedX = 0;
              player.speedY = -6;
              player.direction = "up";
              player.image.src = 'docs/assets/img/garfieldheadup.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
          case "ArrowDown":
            if (player.direction !== "up") {
              player.speedX = 0;
              player.speedY = 6;
              player.direction = "down";
              player.image.src = 'docs/assets/img/garfieldheaddown.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
          case "ArrowLeft":
            if (player.direction !== "right") {
              player.speedX = -6;
              player.speedY = 0;
              player.direction = "left";
              player.image.src = 'docs/assets/img/garfieldheadleft.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
          case "ArrowRight":
            if (player.direction !== "left") {
              player.speedX = 6;
              player.speedY = 0;
              player.direction = "right";
              player.image.src = 'docs/assets/img/garfieldheadright.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
        }
      });
    }
    else if (this.score >= 50) {
      document.addEventListener("keydown", (e) => {
        switch (e.code) {
          case "ArrowUp":
            if (player.direction !== "down") {
              player.speedX = 0;
              player.speedY = -8;
              player.direction = "up";
              player.image.src = 'docs/assets/img/garfieldheadup.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
          case "ArrowDown":
            if (player.direction !== "up") {
              player.speedX = 0;
              player.speedY = 8;
              player.direction = "down";
              player.image.src = 'docs/assets/img/garfieldheaddown.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
          case "ArrowLeft":
            if (player.direction !== "right") {
              player.speedX = -8;
              player.speedY = 0;
              player.direction = "left";
              player.image.src = 'docs/assets/img/garfieldheadleft.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
          case "ArrowRight":
            if (player.direction !== "left") {
              player.speedX = 8;
              player.speedY = 0;
              player.direction = "right";
              player.image.src = 'docs/assets/img/garfieldheadright.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
        }
      });
    }
    else if (this.score >= 100) {
      document.addEventListener("keydown", (e) => {
        switch (e.code) {
          case "ArrowUp":
            if (player.direction !== "down") {
              player.speedX = 0;
              player.speedY = -9;
              player.direction = "up";
              player.image.src = 'docs/assets/img/garfieldheadup.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
          case "ArrowDown":
            if (player.direction !== "up") {
              player.speedX = 0;
              player.speedY = 9;
              player.direction = "down";
              player.image.src = 'docs/assets/img/garfieldheaddown.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
          case "ArrowLeft":
            if (player.direction !== "right") {
              player.speedX = -9;
              player.speedY = 0;
              player.direction = "left";
              player.image.src = 'docs/assets/img/garfieldheadleft.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
          case "ArrowRight":
            if (player.direction !== "left") {
              player.speedX = 9;
              player.speedY = 0;
              player.direction = "right";
              player.image.src = 'docs/assets/img/garfieldheadright.png';
              player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
            }
            break;
          }
        });
      }
        else if (this.score >= 150) {
          document.addEventListener("keydown", (e) => {
            switch (e.code) {
              case "ArrowUp":
                if (player.direction !== "down") {
                  player.speedX = 0;
                  player.speedY = -10;
                  player.direction = "up";
                  player.image.src = 'docs/assets/img/garfieldheadup.png';
                  player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
                }
                break;
              case "ArrowDown":
                if (player.direction !== "up") {
                  player.speedX = 0;
                  player.speedY = 10;
                  player.direction = "down";
                  player.image.src = 'docs/assets/img/garfieldheaddown.png';
                  player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
                }
                break;
              case "ArrowLeft":
                if (player.direction !== "right") {
                  player.speedX = -10;
                  player.speedY = 0;
                  player.direction = "left";
                  player.image.src = 'docs/assets/img/garfieldheadleft.png';
                  player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
                }
                break;
              case "ArrowRight":
                if (player.direction !== "left") {
                  player.speedX = 10;
                  player.speedY = 0;
                  player.direction = "right";
                  player.image.src = 'docs/assets/img/garfieldheadright.png';
                  player.ctx.drawImage(player.image, player.x, player.y, player.w, player.h);
                }
                break;
            }
      });
    }
  };

  stop() {
    clearInterval(this.intervalId);
  }

  //clears canvas
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  updateFood() {
    for (let i = 0; i < this.food.length; i++) {
      this.food[i].draw();
    }
    if (this.frames % 200 === 0) {
      let foodPositionX = Math.floor(Math.random() * (canvas.width - 20));
      let foodPositionY = Math.floor(Math.random() * (canvas.height - 20));

      this.food.push(
        new Food(foodPositionX, foodPositionY, 40, 40, "green", this.ctx)
      );
    }
    if (this.food.length > 2) {
      this.food.shift(); //clears food after some time
    }
  }
  grabFood = () => {
    for (let i = 0; i < this.food.length; i++) {
      let score = document.getElementById('score');
      if (this.player.crashWith(this.food[i])) {
        this.food.splice(i, 1);
        this.score += 10;
        score.innerHTML = this.score;
        eatingSound.play();
        eatingSound.loop = false; 
        console.log("CHOMP");
      }
    } 
  };
 
  updateVeggies() {
    for (let j = 0; j < this.veggies.length; j++) {
      this.veggies[j].draw(); // continue draw enemy
    }
  
    if (this.frames % 200 === 0) {
      let veggiesPositionX, veggiesPositionY;
  
      do {
        veggiesPositionX = Math.floor(Math.random() * (canvas.width - 20)) / 2;
        veggiesPositionY = Math.floor(Math.random() * (canvas.height - 20)) / 2;
      } while (
        Math.abs(veggiesPositionX - this.player.x) < 50 &&
        Math.abs(veggiesPositionY - this.player.y) < 50
      );
  
      this.veggies.push(
        new Veggie(veggiesPositionX,veggiesPositionY,40,40,"blue",this.ctx)
      );
    }
  }
  

  grabVeggies = () => {
    for (let k = 0; k < this.veggies.length; k++) {
      console.log("EW");
      this.updateVeggies();
      if (this.veggies.length > 1) {
        //not crashing but need to change interval
        this.veggies.splice(k, 1);
        //clears veggies after some time
      }
      if (this.player.crashWith(this.veggies[k])) {
        eatingVeggiesSound.play();
        eatingVeggiesSound.loop = false;
        this.gameOver();
        this.player.speedY = null;
        this.player.speedX = null;
        this.stop();
      }
    }
  };

  gameOver() {
    bgMusic.pause();
    gameOverSound.play();
    gameOverSound.loop = false;
    ctx.fillStyle = "#FE8101";
    ctx.fillRect(150, 120, 400, 250);
    ctx.font = "32px Patrick Hand";
    ctx.fillStyle = "red";
    ctx.fillText("Game Over", 287, 200);
    ctx.fillStyle = 'white';
    ctx.fillText('Your final score', 260, 250);
    this.ctx.fillText(`${this.score}`, 340, 310);

  }

  checkGameOver() {
    console.log("dead");
    if (/* this.player.crashWith(this.veggies) || */ this.player.playerDead) {
      this.stop();
      this.gameOver();
    }

  }

  getHighScore() {
    let high = document.getElementById('HighScore')
    let currentScore = this.score;
    let highscore = localStorage.getItem("HighScore");
    if(highscore !== null){
        if (currentScore >= highscore) {
            localStorage.setItem("HighScore", currentScore);      
        }
    
    }
    else{
        localStorage.setItem("HighScore", currentScore);
    }
    
    high.innerHTML = ` ${highscore}`
}
}