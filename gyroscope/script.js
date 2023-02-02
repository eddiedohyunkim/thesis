function handleOrientation(event) {
  let gyroX = event.beta.toFixed(0);
  let gyroY = event.gamma.toFixed(0);
  let gyroZ = event.alpha.toFixed(0);
  updateFieldIfNotNull('orientation-a', gyroZ);
  updateFieldIfNotNull('orientation-b', gyroX);
  updateFieldIfNotNull('orientation-g', gyroY);
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

window.addEventListener('click', (event) => {
  event.preventDefault();
  run();
});

function run(){
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
  }
    window.removeEventListener("deviceorientation", handleOrientation);
}