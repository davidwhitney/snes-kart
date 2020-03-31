class MusicBuff {
  constructor() {
    console.log("🎶 MusicBuff()");
    this.ticks = 4;
    this.completed = false;
  }
  
  tick(platform) {
    this.ticks--;
    if (this.ticks == 0) {
      this.completed = true;
    }
  }  
   
  onCompletion(platform) {
    this.charmMice(platform);
    for (const traveller of platform.contents.filter(c => c.constructor.name == "Traveller")) {
      traveller.isPassedOut = false;
    }
  }
  
  charmMice(platform) {
    console.log("Charming all the mice! 🐭🐭🐁🐁");    
    const mice = platform.contents.filter(e => e.constructor.name === "Mouse");
    for (const mouse of mice) {
      mouse.leave(platform, 15);
    }    
  }
  
}

module.exports = MusicBuff;