const config = require("./Config");
const fps = config.game.fps;

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

class GameClient {
  constructor() {
    this.controllerState = {};
    this.controls = new Controls();
  }
  
  start() {    
    setInterval(() => this.tick(), 1000 / cfg.fps);
  }
  
  tick() {
    
  }
  
  processKey(type, event) {    
    if(type === "keydown") {
      this.controllerState[event.keyCode] = true; 
    } else if (type === "keyup") {
      delete this.controllerState[event.keyCode];
    }
  }  
}

module.exports = GameClient;