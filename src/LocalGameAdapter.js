
class LocalGameAdapter {
  constructor(game) {
    this.game = game;
  }
  
  sendState(id, controllerState) {
    this.game.receiveState(id, controllerState);
  }
  
  syncState() {
    // Gets latest server side state, just a shim here.
    return this.game;
  }
}

module.exports = LocalGameAdapter;