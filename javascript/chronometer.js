class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;    
  }   
  start(callback) {
    
    if(!callback===true){
      this.intervalId = setInterval(() => { 
        this.currentTime ++
      }, 1000);
    }
    else{
      this.intervalId = setInterval((callback) => { 
        callback(); 
        this.currentTime ++
      }, 1000)
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return this.currentTime - (Math.floor(this.currentTime/60)*60)
  }

  computeTwoDigitNumber(value) {
    if(value <= 9){
      value = `0${value}`
    }
    else{
      value = `${value}`
    }
    return value
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
