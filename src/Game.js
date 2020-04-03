const config = require("./Config");
const cfg = config.game;

class Character {
  constructor(characterKey) {
    this.characterKey = characterKey;
    this.x = -150;
    this.y = -305;    
  }
}

class Map {
  constructor(name, background) {
    this.name = name;
    this.background = background;
  }
}

class GameClient {
  /
}

class Game {
  constructor(platformIds) {
    this.keysCurrentlyPressed = {};
    this.controls = new Controls();
    this.player = new Character("mario");
    
    this.activeMap = 0;
    this.maps = [
      new Map("donut1", "https://cdn.glitch.com/92064d7f-02e4-40c8-b920-aca0beefd736%2F6875.png?v=1585925318194")
    ];    
  }
  
  start() {    
    setInterval(() => this.tick(), 1000 / cfg.fps);
  }
  
  tick() {
    this.processControls();
    // adjust map
    // render character
    
  }
  
  processControls() {
    const keysPressed = Object.getOwnPropertyNames(this.keysCurrentlyPressed);
    for (const heldKey of keysPressed) {      
      this.controls.process(heldKey);
    }
  }
  
  processKey(type, event) {
    // 38 up
    // 40 down
    // 37 left
    // 39 right
    
    if(type === "keydown") {
      this.keysCurrentlyPressed[event.keyCode] = true; 
      console.log(event.keyCode);
    } else if (type === "keyup") {
      delete this.keysCurrentlyPressed[event.keyCode];
    }
  }
}

class Controls {
  constructor() {
    this.mapping = {
      38: this.up,
      40: this.down,
      37: this.left,
      39: this.right,
    };
  }
  
  process(keyPressed) {
    this.mapping[keyPressed]();
  }
  
  up() {
    
  }
  
  down() {
    
  }
  
  left() {
    
  }
  
  right() {
    
  }
}

module.exports = Game;