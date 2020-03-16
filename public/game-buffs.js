class cleanBuff {
  constructor() {
    this.ticks = 5;
    this.completed = false;
  }
  
  tick(platform) {
    this.ticks--;
    
    platform.hygiene += 0.3;   
    this.removeOneVom(platform);
    
    if (this.ticks <= 0) {
      this.completed = true;
    }
  }
  
  removeOneVom(platform) {
    for (let index in platform.contents) {
      const entity = platform.contents[index];
      if (entity.constructor.name === "Vomit") {
        platform.contents = platform.contents.filter(item => item !== entity);
        return;
      }
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
    platform.temperature--;
    if (this.ticks == 0) {         
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


if (typeof(module) != 'undefined') {
  module.exports = {
    cleanBuff,
    ventBuff,
    somethingBuff
  };
}