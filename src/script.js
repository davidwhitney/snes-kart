const Game = require("./Game");
const GameUi = require("./GameUi");
let game, ui;

async function startGame(useRealData = false) {
  game = new Game();
  ui = new GameUi(game);  
  game.start();
  ui.startRendering(game);
  
  return game;
}

module.exports = { startGame };