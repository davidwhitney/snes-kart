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
    
  }
  
  processKey(type, event) {
    if(type === "keydown") {
      this.keysCurrentlyPressed[event.keyCode] = true; 
    } else if (type === "keyup") {
      delete this.keysCurrentlyPressed[event.keyCode];
    }
  }
}

module.exports = Game;