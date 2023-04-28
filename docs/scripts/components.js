class Player {
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color; //img
    this.image = null;
    this.ctx = ctx;
    this.speedX = 0;
    this.speedY = 0;
    this.direction = "";
    this.playerDead = false;

    let img = new Image();
    img.src = "docs/assets/img/garfieldheadup.png";
    img.addEventListener('load', () => {
        this.image = img;
    });
  }

  //draws player on the canvas
    draw() { 
      if(this.image){
        this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
      } 
    }

  newPos() {
    if (this.x <= 0) {
      this.playerDead = true
    } else if (this.x + 60 >= 700) {
      this.playerDead = true
    }
    this.x += this.speedX;

    if (this.y <= 0) {
      this.playerDead = true
    } else if (this.y + 60 >= 500) {
      this.playerDead = true
    }
    this.y += this.speedY;
    

  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  crashWith(food) {
    return (
      this.bottom() > food.top() &&
      this.top() < food.bottom() &&
      this.right() > food.left() &&
      this.left() < food.right()
    );
  }
  crashWithBorder() {
    return (
    this.top() < 0 || 
    this.bottom() > canvas.height || 
    this.left() < 0 || 
    this.right() > canvas.width
    );
  }
}

class Food {
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = null;
    this.color = color;
    this.ctx = ctx;
    this.intervalId = null;
  
    const foodArray = ["food.png", "meatballs.png", "chips.png"];
    const randomIndexFood = Math.floor(Math.random() * foodArray.length);
    const newImageFood = new Image();
    newImageFood.src = "docs/assets/img/" + foodArray[randomIndexFood];
    newImageFood.addEventListener('load', () => {
        this.image = newImageFood;
    });
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  draw() {
    if(this.image){
      this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    } 
  }
}

class Veggie {
  constructor(x, y, w, h, color, ctx) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = null;
    this.color = color;
    this.ctx = ctx;
  
    const veggieArray = ["veggie.png", "broccoli.png", "salad.png"];
    const randomIndex = Math.floor(Math.random() * veggieArray.length);
    const newImage = new Image();
    newImage.src = "docs/assets/img/" + veggieArray[randomIndex];
    newImage.addEventListener('load', () => {
        this.image = newImage;
    });
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.h;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.w;
  }

  draw() {
    if(this.image){
      this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    } 
  }

 /* generateNewPosition(playerX, playerY, canvasWidth, canvasHeight) {
    let newX = 0;
    let newY = 0;
    do {
      newX = Math.floor(Math.random() * canvasWidth);
      newY = Math.floor(Math.random() * canvasHeight);
    } while (newX === player.x && newY === player.y);
    this.x = newX;
    this.y = newY;
  }*/
}