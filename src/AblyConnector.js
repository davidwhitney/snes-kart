class StubAblyConnector {
  constructor() {
    this.callbacks = {};
  }
  
  hasCallbacksFor(stationName) {
    const stationCallbacks = Object.getOwnPropertyNames(this.callbacks);    
    if (stationCallbacks.indexOf(stationName) == -1) {
      return false;
    }
    return true;
  }
  
  onArrivalTo(stationName, callback) {    
    if(!this.hasCallbacksFor(stationName)) {
      this.callbacks[stationName] = [];
    }
    
    this.callbacks[stationName].push(callback);
  }
  
  fakeTrainArrival(stationName) {
    if (this.callbacks[stationName])
    
    for (let cb of this.callbacks[stationName]) {
      cb({ station: stationName, line: "platformId1", arrived: true });
    }
  }  
  
  fakeTrainDeparture(stationName) {
    if (this.callbacks[stationName])
    
    for (let cb of this.callbacks[stationName]) {
      cb({ station: stationName, line: "platformId1", departed: true });
    }
  }
  
  
  fakeIncomingData(stationName) {
    // Train arrives and departs every 2 seconds.
    const interval = 1000 * 12;    
    
    for (let cb of this.callbacks[stationName]) {
      
      cb({ station: stationName, line: "platformId1", arrived: true });
      setTimeout(() => {
        cb({ station: stationName, line: "platformId1", departed: true });
        setTimeout(() => this.fakeIncomingData(stationName), interval);
      }, interval);
      
    }    
  }  
}

module.exports = StubAblyConnector;