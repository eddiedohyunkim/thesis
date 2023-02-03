function handleOrientation(event) {
  let gyroX = event.beta; 
  let gyroY = event.gamma;
  let gyroZ = event.alpha;
  updateFieldIfNotNull('orientation-a', gyroZ);
  updateFieldIfNotNull('orientation-b', gyroX);
  updateFieldIfNotNull('orientation-g', gyroY);
  detectUpsideDown(gyroX, gyroY, gyroZ);
  lettersRotateX(gyroX)
  incrementEventCount();

}

function lettersRotateX(x){
  const rotatable = document.querySelectorAll('.rotate');
  for(let each of rotatable){
    each.style.transform = `rotateX(${x}deg)`;
  }
}

function detectUpsideDown(x, y, z){
  if( ((x > 170 && x <= 180) || (x >= -180 && x < -170)) && (y >= -10 && y <= 10) ){
    document.body.style.backgroundColor = 'red';
  }else{
    document.body.style.backgroundColor = 'white';
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
let holdArea = document.getElementById('holdArea');
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