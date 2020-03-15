class cleanBuff {
  constructor() {
    this.ticks = 5;
    this.completed = false;
  }
  
  tick(platform) {
    this.ticks--;
    if (this.ticks == 0) {
      this.completed = true;
    }
  }
}

class ventBuff {
  constructor() {
    this.ticks = 5;
    this.completed = false;
  }
  
  tick(platform) {
    this.ticks--;
    if (this.ticks == 0) {
      
      // remove 10% of heat here, rather than resetting.
      platform.temperature = 15;      
      this.completed = true;
    }
  }
}

class somethingBuff {
  constructor() {
    this.ticks = 5;
    this.completed = false;
  }
  
  tick(platform) {
    this.ticks--;
    if (this.ticks == 0) {
      this.completed = true;
    }
  } 
}
