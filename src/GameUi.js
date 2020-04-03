const config = require("./Config");
const fps = config.game.fps;

class GameUi {
  
  constructor(initialState) {
    this.playfield = document.getElementById("playfield");    
    this._lastState = JSON.stringify(initialState);    
    this._renderingFunctions = [ ];
  }

  startRendering(game) {
    setInterval(() => this.draw(game), 1000 / fps);
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