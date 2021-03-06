const config = require("./Config");
const fps = config.game.fps;
    
const map = document.getElementById("world");

class GameUi {
  
  constructor() {
    this._lastState = JSON.stringify({}); 
    this._renderingFunctions = [ 
      renderCameraPerspective
    ];
  }

  startRendering(client) {
    setInterval(() => this.draw(client), 1000 / fps);
  }
  
  draw(client) {
    if (JSON.stringify(client) === this._lastState) {
      return; // No state has changed, do we need to re-render?
    }
    
    const lastStateSnapshot = JSON.parse(this._lastState);
    for (let renderer of this._renderingFunctions) {
      const ret = renderer(client, lastStateSnapshot)
      if (ret === -1) { // Renderer caused an early exit
        break;
      }
    }
    
    this._lastState = JSON.stringify(client);
  }
}


function renderCameraPerspective(currentState, lastState) {
  const x = currentState.camera.x;
  const y = currentState.camera.y;
  
  map.style.transform = `rotateX(40deg) rotate(${currentState.camera.r}deg) translateY(${y}px) translateX(${x}px)`;  
}

module.exports = GameUi;