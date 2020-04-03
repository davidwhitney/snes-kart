const Game = require("./Game");
const GameClient = require("./GameClient");
const LocalGameAdapter = require("./LocalGameAdapter");
const GameUi = require("./GameUi");

let game, ui, client, localGameAdapter;

async function startGame(useRealData = false) {
  game = new Game();
  ui = new GameUi(game);
  
  localGameAdapter = new LocalGameAdapter(game);
  
  client = new GameClient(localGameAdapter);  
  window.addEventListener("keydown", (keyInfo) => { client.processKey("keydown", keyInfo); }, false);      
  window.addEventListener("keyup",  (keyInfo) => { client.processKey("keyup", keyInfo); }, false);
  
  client.start();
  game.start();
  ui.startRendering(game);
  
  // Temp
  return game;
}

module.exports = { startGame };