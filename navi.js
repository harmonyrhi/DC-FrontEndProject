let options =
 {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(position) {
    let crd = position.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
    let loca = navigator.geolocation.getCurrentPosition(success, error, options);
  
    let enterLoca = document.querySelector('locationData')

    enterLoca.innerHTML = loca