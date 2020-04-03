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
}

module.exports = Game;