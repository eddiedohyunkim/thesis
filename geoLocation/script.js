function success(position) {
  console.log(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert('Sorry, no position available.');
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 0,
  timeout: 1000
};

const watchID = navigator.geolocation.watchPosition(success, error, options);