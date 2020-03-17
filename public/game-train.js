/* globals uuidv4, Traveller */
if (typeof(module) != 'undefined') {
  uuidv4 = require("./game-_utils").uuidv4;
  Traveller = require("./game-traveller");
}

class Train {
  constructor() {
    this.id = uuidv4();
    this.ticks = 0;
    this.hasTicked = false;
  }
  
  tick(platform) {
    this.ticks++;
    
    platform.temperature += 0.5;
    platform.contents.push(new Traveller());

    if (this.hasTicked) {
      return; // Only run the next bit once
    }
    
    // Code that can generate problems on the platform goes here.
    
    this.hasTicked = true;
  }
}

if (typeof(module) != 'undefined') {
  module.exports = Train;
}