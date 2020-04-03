const newGuid = require("./Guid");
const config = require("./Config");
const fps = config.game.fps;

class Camera {
  constructor() {    
  }
  
  setLocation(x, y) {
    this.x = x;
    this.y = y;
  }
}

class GameClient {
  constructor(gameConnection) {
    this.id = newGuid();
    this.controllerState = {};
    this.camera = new Camera();
    this.gameConnection = gameConnection;
    this.latestState = null;
  }
  
  start() {    
    setInterval(() => this.tick(), 1000 / fps);
  }
  
  tick() {
    // Only send the message on change, ideally.
    this.gameConnection.sendState(this.id, this.controllerState);
    this.latestState = this.gameConnection.syncState();    
    // Pick the right character at some point.
    this.camera.setLocation(this.latestState.characters[0].x, this.latestState.characters[0].y);
  }
  
  processKey(type, event) {    
    
    const mapping = {
      38: "up",
      40: "down",
      37: "left",
      39: "right",
    };
    
    if(type === "keydown") {
      this.controllerState[mapping[event.keyCode]] = true; 
    } else if (type === "keyup") {
      delete this.controllerState[mapping[event.keyCode]];
    }
  }  
}

module.exports = GameClient;