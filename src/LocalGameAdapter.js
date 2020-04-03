
class LocalGameAdapter {
  constructor(game) {
    this.game = game;
  }
  
  sendState(id, controllerState) {
    this.game.receiveState(id, controllerState);
  }
}

module.exports = LocalGameAdapter;