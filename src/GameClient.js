const newGuid = require("./Guid");
const config = require("./Config");
const fps = config.game.fps;

class GameClient {
  constructor(gameConnection) {
    this.id = newGuid();
    this.controllerState = {};
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