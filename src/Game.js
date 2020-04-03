const config = require("./Config");
const cfg = config.game;


class Game {
  constructor(platformIds) {
    this.keysCurrentlyPressed = {};
    this.controls = new Controls();
  }
  
  start() {    
    setInterval(() => this.tick(), 1000 / cfg.fps);
  }
  
  tick() {
    this.processControls();
    
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