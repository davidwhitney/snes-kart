const Game = require("./Game");
const GameUi = require("./GameUi");

const AblyTrainArrivalsClient = require("./AblyTrainArrivalsClient");
const SimulatedTrainArrivalsClient = require("./SimulatedTrainArrivalsClient");

let game, ui, dataSource;

async function startGame(useRealData = false) {
  dataSource = useRealData 
                ? new AblyTrainArrivalsClient() 
                : new SimulatedTrainArrivalsClient();
  
  game = new Game();
  ui = new GameUi(game);
  
  game.start({
    onGameStart: async () => await dataSource.listenForEvents("northern:940GZZLUKSX", msg => game.registerEvent(game, msg)),
    onGameEnd: () => dataSource.stopListening()
  });

  ui.startRendering(game);
  
  return game;
}

module.exports = { startGame };