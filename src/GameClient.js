const newGuid = require("./Guid");
const config = require("./Config");
const fps = config.game.fps;

class Controls {
  constructor() {
    this.mapping = {
      38: "up",
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
  constructor(gameConnection) {
    this.id = newGuid();
    this.controllerState = {};
    this.controls = new Controls();
    this.gameConnection = gameConnection;
  }
  
  start() {    
    setInterval(() => this.tick(), 1000 / fps);
  }
  
  tick() {
    this.gameConnection.sendState(this.id, this.controllerState);
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