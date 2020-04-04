
class Character {
  constructor(characterKey) {
    this.characterKey = characterKey;
    this.x = 0;
    this.y = 0;  
    this.r = 0;
    
    this.rotateRate = 4;
    this.movementRate = 8;
  }
  
  processKey(command) {
    this[command]();
  }
  
  up() {
    const nextXY = this.nextSteps(0, 0, this.r);
    this.x += (nextXY[0] * this.movementRate);
    this.y += (nextXY[1] * this.movementRate);
  }
  
  down() {    
    const nextXY = this.nextSteps(0, 0, this.r); 
    this.x -= (nextXY[0] * this.movementRate);
    this.y -= (nextXY[1] * this.movementRate);
  }
  
  left() {
    this.r += this.rotateRate;
    this.r = this.r >= 360 ? 0 : this.r;
    this.r = this.r <= -360 ? 0 : this.r;
  }
  
  right() {
    this.r += -this.rotateRate;
    this.r = this.r >= 360 ? 0 : this.r;
    this.r = this.r < 0 ? 359 : this.r;
  }
  
  nextSteps(x, y, a) {
    let xy = [];
    if(45 <= a && a <= 135) {
        xy = [1, this.cot(Math.PI*a/180)];
    } else if(135 <= a && a <= 225) {
        xy = [-this.tan(Math.PI*a/180), -1];
    } else if(225 <= a && a <= 315) {
        xy = [-1, -this.cot(Math.PI*a/180)];
    } else {
        xy = [this.tan(Math.PI*a/180), 1];
    }
    xy[0] = x+xy[0]; //Math.round(x+xy[0]);
    xy[1] = y+xy[1]; //Math.round(y+xy[1]);
    return xy;
  }

  cot(x) {
      return 1/Math.tan(x);
  }

  tan(x) {
      return Math.tan(x);
  }
}

module.exports = Character;