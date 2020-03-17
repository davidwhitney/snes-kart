 class GameUi {
  
  constructor(initialState) {
    this.playfield = document.getElementById("playfield");
    this.track = document.getElementById("track");
    this.platform = document.getElementById("platform");
    
    this._lastState = JSON.stringify(initialState);    
    this._renderingFunctions = [
      renderLabels,
      renderGameStatus,
      renderTemperature,
      renderPlatform,
      renderContents,
      renderBuffs
    ];
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


function renderLabels(currentGameState, previousGameState) {
  
  const viewModel = {
    "game": currentGameState,
    "ticks": currentGameState.ticks,
    "total-platforms": currentGameState.platforms.length,
    "platforms": currentGameState.platforms,
    "gameovermsg": currentGameState.gameovermsg
  };

  let props = Object.getOwnPropertyNames(viewModel);
  for (let prop of props) {
    const selector = "[data-bind-" + prop + "]";
    const elements = [...document.querySelectorAll(selector)];
    for(let ele of elements) {
      ele.innerHTML = viewModel[prop];
    }
  }
    
  for (let index in currentGameState.platforms) {
    const platform = currentGameState.platforms[index];
    
    props = Object.getOwnPropertyNames(platform);
    for (let prop of props) {
      const selector = "[data-bind-platform-" + index + "-" + prop + "]";
      const elements = [...document.querySelectorAll(selector)];
      for(let ele of elements) {
        ele.innerHTML = platform[prop];
      }
    }
  }
}

function renderBuffs(currentGameState, previousGameState) {
  const buffTing = document.getElementById("buffs");
  buffTing.innerHTML = "";
  
  for (let platform of currentGameState.platforms) {
    for (let buff of platform.buffs) {
      const ele = document.createElement("div");
      ele.innerHTML = buff.constructor.name[0].toUpperCase() + " " + buff.ticks;
      ele.classList.add("buff");
      ele.classList.add(buff.constructor.name);
      buffTing.appendChild(ele);
      
    }
  }  
}

function renderGameStatus(currentGameState, previousGameState) {
  if (currentGameState.status !== "ended") return;  
  document.getElementById("game-over-message").classList.remove("hide");
  
  return -1;
}

function renderTemperature(currentGameState, previousGameState) {
  
  const anyPlatformTooHot = currentGameState.platforms.filter(p => p.temperature > 30).length > 0;
  const overlay = document.getElementById("temperatureOverlay");
  if (anyPlatformTooHot) {
    overlay.classList.remove("hide");
    overlay.style.opacity = currentGameState.platforms[0].temperature + "%";
  } else {    
    overlay.classList.add("hide");
  }  
}


function renderPlatform(currentGameState, previousGameState) {
  
  for (let platform of currentGameState.platforms) {        
    const platformAsOfLastTick = previousGameState.platforms.filter(p => p.id == platform.id)[0];

    if (!platformAsOfLastTick.hasTrain && platform.hasTrain) {
      renderArrivingTrain();
    } 

    if (platformAsOfLastTick.hasTrain && !platform.hasTrain ) {
      document.getElementById("active-train").remove();
    }      
  }    
}

function renderContents(currentGameState, previousGameState) {
  this.platform.innerHTML = "";
  
  for (let platform of currentGameState.platforms) {
    
    for (let entity of platform.contents) {
          
      const entityIcon = document.createElement("div");
      entityIcon.classList.add("entity");
      entityIcon.classList.add(entity.constructor.name.toLowerCase());
      entityIcon.setAttribute(`data-${entity.constructor.name.toLowerCase()}-id`, entity.id);
      this.platform.appendChild(entityIcon);      
    }    
   
  }    
}

function renderArrivingTrain() {
  const src = "https://cdn.glitch.com/0993a1dd-56b8-4a95-8ad8-5383c9b59d24%2Ftrain.png?v=1584286890941"; // train  
  const trainImage = document.createElement("img");
  trainImage.setAttribute("id", "active-train");
  trainImage.setAttribute("src", src);
  trainImage.classList.add("train");
  trainImage.classList.add("arrival");
  this.track.appendChild(trainImage);

  // play css animation to slide train in

}

if (typeof(module) != 'undefined') {
  module.exports = GameUi;
}