const newGuid = require("./Guid");
const config = require("./Config");
const Character = require("./Character");
const Map = require("./Map");
const cfg = config.game;

class Game {
  constructor(platformIds) {    
    this.activeMap = 0;
    this.maps = [
      new Map("donut1", "https://cdn.glitch.com/92064d7f-02e4-40c8-b920-aca0beefd736%2F6875.png?v=1585925318194")
    ];
    
    this.characters = [
      new Character("mario")
    ];
  }
  
  receiveState(playerId, controlState) {
    // Pretend there's multiple player handling here
    const keysPressed = Object.getOwnPropertyNames(controlState);
    for (const heldKey of keysPressed) { 
      this.characters[0].processKey(heldKey);
    }
  }
  
  start() {    
    setInterval(() => this.tick(), 1000 / cfg.fps);
  }
  
  tick() {
    this.processMessages();
    this.processAi();
    this.checkForWinners();    
  }
  
  processMessages() {
    
  }
  
  processAi() {
    
  }
  
  checkForWinners() {
    
  }
}


module.exports = Game;