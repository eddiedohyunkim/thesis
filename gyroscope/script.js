function handleOrientation(event) {
  updateFieldIfNotNull('orientation-a', event.alpha);
  updateFieldIfNotNull('orientation-b', event.beta);
  updateFieldIfNotNull('orientation-g', event.gamma);
  incrementEventCount();
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
holdArea.addEventListener('touchstart', (event) => {
  event.preventDefault();
  is_running = true;
  run();
});

holdArea.addEventListener('touchend', (event) => {
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