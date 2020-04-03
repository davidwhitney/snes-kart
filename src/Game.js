const newGuid = require("./Guid");
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



class Game {
  constructor(platformIds) {
    
    this.activeMap = 0;
    this.maps = [
      new Map("donut1", "https://cdn.glitch.com/92064d7f-02e4-40c8-b920-aca0beefd736%2F6875.png?v=1585925318194")
    ];
    
    this.players = [
      new Character("mario")
    ];
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
  
  processControls() {
    const keysPressed = Object.getOwnPropertyNames(this.keysCurrentlyPressed);
    for (const heldKey of keysPressed) {      
      this.controls.process(heldKey);
    }
  }

}


module.exports = Game;