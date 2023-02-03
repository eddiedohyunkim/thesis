const typeArea = document.getElementById('typeArea')
const sentence = 'A possible defense strategy against algorithmic recognition';
const fakeOptions = 'ABCDEFGHIJKLMNOPQRSTUVWWXYZ1234567890~!@#$%^&*()_+:;?/'

for(let each of sentence){
  createLetter(each)
}

function createLetter(letter){
  let flipcard = document.createElement('div');
  flipcard.className = 'flip-card';
  typeArea.appendChild(flipcard);

  let flipcardInner = document.createElement('div');
  flipcardInner.className = 'flip-card-inner rotate';
  flipcard.appendChild(flipcardInner);

  let flipcardFront = document.createElement('div');
  flipcardFront.className = 'flip-card-front';
  flipcardFront.innerHTML = fakeOptions[ran(fakeOptions.length)]
  flipcardInner.appendChild(flipcardFront);

  let flipcardBack = document.createElement('div');
  flipcardBack.className = 'flip-card-back';
  flipcardBack.innerHTML = letter
  flipcardInner.appendChild(flipcardBack);

}

function ran(num){
  return Math.floor(Math.random()*num);
}


function handleOrientation(event) {
  let gyroX = event.beta; 
  let gyroY = event.gamma;
  let gyroZ = event.alpha;
  // updateFieldIfNotNull('orientation-a', gyroZ);
  // updateFieldIfNotNull('orientation-b', gyroX);
  // updateFieldIfNotNull('orientation-g', gyroY);
  detectUpsideDown(gyroX, gyroY, gyroZ);
  lettersRotateX(gyroX)
  // incrementEventCount();

}

function lettersRotateX(x){
  const rotatable = document.querySelectorAll('.rotate');
  for(let each of rotatable){
    each.style.transform = `rotateX(-${x}deg)`;
  }
}

function detectUpsideDown(x, y, z){
  if( ((x > 170 && x <= 180) || (x >= -180 && x < -170)) && (y >= -10 && y <= 10) ){
    document.body.className = 'inverted';
  }else{
    document.body.classList.remove = 'inverted';
  }
}

function incrementEventCount(){
  let counterElement = document.getElementById("num-observed-events")
  let eventCount = parseInt(counterElement.innerHTML)
  counterElement.innerHTML = eventCount + 1;
}

function updateFieldIfNotNull(fieldName, value, precision=0){
  if (value != null)
    document.getElementById(fieldName).innerHTML = value.toFixed(precision);
}

let is_running = false;
// let holdArea = document.getElementById('holdArea');
document.body.addEventListener('touchstart', (event) => {
  event.preventDefault();
  is_running = true;
  run();
});

document.body.addEventListener('touchend', (event) => {
  event.preventDefault();
  is_running = false;
  run();
});

function run(){
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
  }
  
  if (is_running){
    window.removeEventListener("deviceorientation", handleOrientation);
    is_running = false;
  }else{
    window.addEventListener("deviceorientation", handleOrientation);
    is_running = true;
  }
}