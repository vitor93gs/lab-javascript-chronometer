class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;    
  }   

  start(callback) {
    this.intervalId = setInterval(() => { 
      this.currentTime ++;
      if (callback){
        this.tempo()
        callback(this.minutos,this.segundos,this.miliseg);
      }
    }, 10);
  }

  getMinutes() {
    return Math.floor(this.currentTime / 6000);;
  }

  getSeconds() {
    return Math.floor((this.currentTime/100) - (Math.floor(this.currentTime/6000)*60));
  }

  getMilliseconds() {
    return this.currentTime - (Math.floor(this.currentTime/100)*100);
  }
  
  tempo(){
    this.minutos = this.computeTwoDigitNumber(this.getMinutes())
    this.segundos = this.computeTwoDigitNumber(this.getSeconds())
    this.miliseg = this.computeTwoDigitNumber(this.getMilliseconds())
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

  reset(callback) {
    this.currentTime = 0
    this.tempo()
    callback(this.minutos,this.segundos,this.miliseg);
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}:${this.computeTwoDigitNumber(this.getMilliseconds())}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
