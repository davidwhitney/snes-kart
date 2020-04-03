const newGuid = require("./Guid");
const config = require("./Config");
const cfg = config.game;

class Character {
  constructor(characterKey) {
    this.characterKey = characterKey;
    this.stepSize = 10;
    this.x = 0;
    this.y = 0;  
    this.r = 0;
  }
  
  processKey(command) {
    this[command]();
  }
  
  up() {
    const nextXY = this.nextSteps(0, 0, this.r);   
    console.log(nextXY);
    this.x += (nextXY[0]); // * this.stepSize);
    this.y += (nextXY[1]); // * this.stepSize);
  }
  
  down() {    
    const nextXY = this.nextSteps(0, 0, this.r);    
    console.log(nextXY);
    this.x -= (nextXY[0]);// * this.stepSize);
    this.y -= (nextXY[1])// * this.stepSize);
  }
  
  left() {
    this.r += (1 * this.stepSize);
  }
  
  right() {
    this.r += -(1 * this.stepSize);
  }
  
  nextSteps(x, y, a) {
    let xy = [];
    if(45 <= a && a <= 135) {
        xy = [1, this.cot(Math.PI*a/180)];
    } else if(135 <= a && a <= 225) {
        xy = [-this.tan(Math.PI*a/180), -1];
    } else if(225 <= a && a <= 315) {
        xy = [-1, -this.cot(Math.PI*a/180)];
    } else {
        xy = [this.tan(Math.PI*a/180), 1];
    }
    xy[0] = Math.round(x+xy[0]);
    xy[1] = Math.round(y+xy[1]);
    return xy;
  }

  cot(x) {
      return 1/Math.tan(x);
  }

  tan(x) {
      return Math.tan(x);
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