// const app =  {
//     init: () => {
//         // Document
//         //      .onload(app.fetchWeather),
//             document.getElementById('btnCurrent')/**INSERT *ID TAG* FOR CURRENT WEATHER*/
//             // document.addEventListener('click' , app.getLocation);
//             //.onload(app.getLocation)
//             document.getElementById('btnGet'),/**INSERT *ID TAG* FOR GET WEATHER FORECAST FEATURE*/
//             // document.addEventListener('click' , app.fetchWeather);
//             document.addEventListener('click' , app.fetchWeather);
  
            
//     },
//     fetchWeather: (ev) => { console.log('test');
//         //use the values from latitude and longitude to fetch the weather from JS 
//         let lat = "33.7490";
//         let lon = "84.3880";
//         let key = '8386a687f2f5376a7e8ca545f6bbc2a7';
//         let lang = 'en'; 
//         let units = 'imperial'; // could use Standard(Kelvin), Metric, or Imperial
//         let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
//         //fetches weather information, the variables attached to the end of the URL 
//         fetch(url) 
//         .then((Response) => {
//           if (!Response.ok) throw new Error(Response.statusText)
//           return Response.json();
//             })
//             .then((data) => {
//                 app.showWeather(data);
//                 console.log(data);
//             })
//             .catch(console.error) // "console.err" logs the error internally, return displays it but kills the program
        
//     },
//     getLocation: (ev) => {
//         let opts = {
//             enableHighAccuracy: true,
//             timeout: 1000 * 10, // 10 seconds
//             maximumAge: 1000 * 60 * 5, // 5 minutes
//         };
//         navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
//     },
//     ftw: (position) => {
//         //position aquired
//         document.getElementById('latitude').value = 
//             position.coords.latitude.toFixed(2);
//         document.getElementById('longitude').value = 
//             position.coords.longitude.toFixed(2);
//     },
    
//     wtf: (err) => {
//         console.error(Error)
//         console.log('there was an error')
//     },
   
//     showWeather: (Response) => {
//         console.log(Response)
//         let currentTempLogo = document.querySelector('.logobox') //.weather.row is the dummy "div class" info just to build the app, replace with dif class info where div will be placed
//         //clear out old weather data and add new 
//         //row.innerHTML = ''; //row.innerHTML clears out current HTML replaces it with data from api
//         currentTempLogo.innerHTML = Response.daily.map((day, index) => {
//             if (index <= 0) {  // the index of 2 will print as a 3 day report, this can be changed for any static date span up to 7 days
//                 let dt = new Date(day.dt * 1000); //timestamp * 1000
//                 let sr = new Date(day.sunrise * 1000).toTimeString();
//                 let ss = new Date(day.sunset * 1000).toTimeString();
//                 return `
//                   <img
//                     src="http://openweathermap.org/img/wn/${
//                       day.weather[0].icon
//                     }@4x.png"
//                     class="card-img-top"
//                     alt="${day.weather[0].description}"
//                   />`
//             ; // all the HTML text above will be auto populated with the respective JSON information
//           }
//       }).join(' '); // LINES 67 -  from the response, we pull the DAILY array of info, then map through it for the first 3 days, .join(' ') merges the strings together to create inner HTML
//   },
// };
    

// var iconcode = a.weather[0].icon;
// let locationIcon = document.querySelector('.weather-icon');document.getElementById(icon)
// const {icon} = data.weather[0];
// locationIcon.innerHTML = `<img src="icons/${icon}.png">;`


// while the precip < 50% show clear skies
// while the precip > 50% show cloudy skies

const fetchWeather: (ev) => { console.log('test');
//use the values from latitude and longitude to fetch the weather from JS 
let lat = "33.7490";
let lon = "84.3880";
let key = '8386a687f2f5376a7e8ca545f6bbc2a7';
let lang = 'en'; 
let units = 'imperial'; // could use Standard(Kelvin), Metric, or Imperial
let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
//fetches weather information, the variables attached to the end of the URL 
fetch(url) 
.then((Response) => {
  if (!Response.ok) throw new Error(Response.statusText)
  return Response.json();
    })
    .then((data) => {
        app.showWeather(data);
        console.log(data);
    })
    .catch(console.error) // "console.err" logs the error internally, return displays it but kills the program

},
