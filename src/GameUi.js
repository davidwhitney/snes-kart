const config = require("./Config");
const fps = config.game.fps;

class GameUi {
  
  constructor() {
    this.playfield = document.getElementById("playfield");    
    this._lastState = JSON.stringify({}); 
    this._renderingFunctions = [ ];
  }

  startRendering(client) {
    setInterval(() => this.draw(client.latestState), 1000 / fps);
  }
  
  draw(g) {
    if (JSON.stringify(g) === this._lastState) {
      return; // No state has changed, do we need to re-render?
    }
    
    const lastStateSnapshot = JSON.parse(this._lastState);
    for (let renderer of this._renderingFunctions) {
      const ret = renderer(g, lastStateSnapshot)
      if (ret === -1) { // Renderer caused an early exit
        break;
      }
    }
    
    this._lastState = JSON.stringify(g);
  }
}


module.exports = GameUi;