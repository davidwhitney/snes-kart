const config = require("./Config");
const cfg = config.game;


class Game {
  constructor(platformIds) {
    this.keysCurrentlyPressed = {};
  }
  
  start() {    
    setInterval(() => this.tick(), 1000 / cfg.fps);
  }
  
  tick() {
    this.processControls();
    
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

module.exports = Game;