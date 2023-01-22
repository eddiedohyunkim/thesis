// function success(position) {
//   console.log(position.coords.latitude, position.coords.longitude);
// }

// function error() {
//   alert('Sorry, no position available.');
// }

// const options = {
//   enableHighAccuracy: true,
//   maximumAge: 0,
//   timeout: 1000
// };

// const watchID = navigator.geolocation.watchPosition(success, error, options);

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

// let is_running = false;
// let demo_button = document.getElementById("start_demo");
// demo_button.onclick = function(e) {
//   e.preventDefault();
  
//   // Request permission for iOS 13+ devices
//   if (
//     DeviceMotionEvent &&
//     typeof DeviceMotionEvent.requestPermission === "function"
//   ) {
//     DeviceMotionEvent.requestPermission();
//   }
  
//   if (is_running){
//     window.removeEventListener("deviceorientation", handleOrientation);
//     demo_button.innerHTML = "Start";
//     demo_button.classList.add('btn-success');
//     demo_button.classList.remove('btn-danger');
//     is_running = false;
//   }else{
//     window.addEventListener("deviceorientation", handleOrientation);
//     document.getElementById("start_demo").innerHTML = "Stop";
//     demo_button.classList.remove('btn-success');
//     demo_button.classList.add('btn-danger');
//     is_running = true;
//   }
// };

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
    // setInterval( function(){console.log(true)}, 100)
    
    // window.removeEventListener("devicemotion", handleMotion);
    window.removeEventListener("deviceorientation", handleOrientation);
    holdArea.classList.add('btn-success');
    holdArea.classList.remove('btn-danger');
    // demo_button.innerHTML = "Start";
    // demo_button.classList.add('btn-success');
    // demo_button.classList.remove('btn-danger');
    // is_running = false;
  }else{
    // console.log(false)
    // window.addEventListener("devicemotion", handleMotion);
    window.addEventListener("deviceorientation", handleOrientation);
    // document.getElementById("start_demo").innerHTML = "Stop";
    holdArea.classList.remove('btn-success');
    holdArea.classList.add('btn-danger');
    // is_running = true;
  }
}

/*
Light and proximity are not supported anymore by mainstream browsers.
window.addEventListener('devicelight', function(e) {
   document.getElementById("DeviceLight").innerHTML="AmbientLight current Value: "+e.value+" Max: "+e.max+" Min: "+e.min;
});

window.addEventListener('lightlevel', function(e) {
   document.getElementById("Lightlevel").innerHTML="Light level: "+e.value;
});

window.addEventListener('deviceproximity', function(e) {
   document.getElementById("DeviceProximity").innerHTML="DeviceProximity current Value: "+e.value+" Max: "+e.max+" Min: "+e.min;
});

window.addEventListener('userproximity', function(event) {
   document.getElementById("UserProximity").innerHTML="UserProximity: "+event.near;
});
*/