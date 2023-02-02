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

function run(){
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
  }
  window.removeEventListener("deviceorientation", handleOrientation);
}