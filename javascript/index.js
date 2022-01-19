const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');




function printTime(minutos,segundos, miliseg) {
  printMinutes(minutos)
  printSeconds(segundos)
  printMilliseconds(miliseg)
}

function printMinutes(min) {
  minDecElement.textContent = min[0]
  minUniElement.textContent = min[1]
}

function printSeconds(sec) {
  secDecElement.textContent = sec[0]
  secUniElement.textContent = sec[1]
}

// ==> BONUS
function printMilliseconds(mil) {
  milDecElement.textContent = mil[0]
  milUniElement.textContent = mil[1]
}

function printSplit() {
  var novaLi = document.createElement('li');
  novaLi.textContent = chronometer.split()
  splitsElement.appendChild(novaLi)
}

function clearSplits() {
  while (splitsElement.firstChild) {
    splitsElement.removeChild(splitsElement.firstChild);
  }
}

function setStopBtn() {
  btnLeftElement.textContent = 'STOP'
  btnLeftElement.classList.remove("start");
  btnLeftElement.classList.add("stop")
}

function setSplitBtn() {
  btnRightElement.textContent = 'SPLIT';
  btnRightElement.classList.remove("reset");
  btnRightElement.classList.add("split");
}

function setStartBtn() {
  btnLeftElement.textContent = 'START';
  btnLeftElement.classList.remove("stop");
  btnLeftElement.classList.add("start");
}

function setResetBtn() {
  btnRightElement.textContent = 'RESET';   
  btnRightElement.classList.remove("split");
  btnRightElement.classList.add("reset");
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.textContent==='START'){
    chronometer.start(printTime)
    setStopBtn()
    setSplitBtn()
  }
  else{
    setResetBtn()
    setStartBtn()
    chronometer.stop()
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.textContent==='RESET'){
    chronometer.reset(printTime)
    clearSplits()
  }
  else{
    printSplit()
    
  }
});