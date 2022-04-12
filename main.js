/**   We are using the "one call" version of the openweathermap.org API, this allows 
 *    for:
 *          - Current Weather
 *          - Minute forcast for 1 hour
 *          - Hourly forecast for 48 hours
 *          - Daily forecast 7 days
 *          - National Weather Alerts
 *          - Historical Weather data for the previous 5 days.
 * 
 * This API relies on geographic coordinates (longitude, latitude) which are converted 
 * from the address + zip entered in the search entry. This requires a locational API
 * which is pre-loaded into the weather API no additional integtration 
 * */

<<<<<<< Updated upstream
const app = {
    init: () => {
        document
            .getElementById('btnGet')/**INSERT *ID TAG* FOR GET WEATHER FORECAST FEATURE*/
            .addEventListener('click' , app.fetchWeather);
        document
            .getElementById('btnCurrent')/**INSERT *ID TAG* FOR CURRENT WEATHER*/
            .addEventListener('click' , app.getLocation);
    },
    fetchWeather: (ev) => {
        //use the values from latitude and longitude to fetch the weather from JS 
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value
        let key = '8386a687f2f5376a7e8ca545f6bbc2a7';
        let lang = 'en'; 
        let units = 'imperial'; // could use Standard(Kelvin), Metric, or Imperial
        let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
        //fetches weather information, the variables attached to the end of the URL 
        fetch(url) 
            .then((Response) => {
                if (!Response.ok) throw new Error(Response.statusText)
                return Response.json;
            })
            .then((data) => {
                app.showWeather(data);
            })
            .catch(console.error) // "console.err" logs the error internally, return displays it but kills the program
        
    },
    getLocation: (ev) => {
        let opts = {
            enableHighAccuracy: true,
            timeout: 1000 * 10, // 10 seconds
            maximumAge: 1000 * 60 * 5, // 5 minutes
        };
        navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
    },
    ftw: (position) => {
        //position aquired
        document.getElementById('latitude').value = 
            position.coords.latitude.toFixed(2);
        document.getElementById('longitude').value = 
            position.coords.longitude.toFixed(2);
    },
    wtf: (err) => {
        console.log('there was an error')
    },
    showWeather: (Response) => {
        console.log(Response)
        let row = document.querySelector('.weather.row') //.weather.row is the dummy "div class" info just to build the app, replace with dif class info where div will be placed
        //clear out old weather data and add new 
        //row.innerHTML = ''; //row.innerHTML clears out current HTML replaces it with data from api
        row.innerHTML = Response.daily.map((day, index) => {
            if (index <= 2) {  // the index of 2 will print as a 3 day report, this can be changed for any static date span up to 7 days
                let dt = new Date(day.dt * 1000); //timestamp * 1000
                let sr = new Date(day.sunrise * 1000).toTimeString();
                let ss = new Date(day.sunset * 1000).toTimeString();
            return `<div class="col">
            <div class="card">
            <h5 class="card-title p-2">${dt.toDateString()}</h5> // .toDateString converts current Day/Time to a string
              <img
                src="http://openweathermap.org/img/wn/${
                  day.weather[0].icon // weather is an array in the JSON file
                }@4x.png"
                class="card-img-top"
                alt="${day.weather[0].description}" // alt text for image
              />
              <div class="card-body">
                <h3 class="card-title">${day.weather[0].main}</h3>
                <p class="card-text">High ${day.temp.max}&deg;C Low ${
          day.temp.min
        }&deg;C</p>
                <p class="card-text">High Feels like ${
                  day.feels_like.day
                }&deg;C</p>
                <p class="card-text">Pressure ${day.pressure}mb</p>
                <p class="card-text">Humidity ${day.humidity}%</p>
                <p class="card-text">UV Index ${day.uvi}</p>
                <p class="card-text">Precipitation ${day.pop * 100}%</p>
                <p class="card-text">Dewpoint ${day.dew_point}</p>
                <p class="card-text">Wind ${day.wind_speed}m/s, ${
          day.wind_deg
        }&deg;</p>
                <p class="card-text">Sunrise ${sr}</p> // sunrise
                <p class="card-text">Sunset ${ss}</p> // sunset
              </div>
            </div>
          </div>
        </div>`; // all the HTML text above will be auto populated with the respective JSON information
            }
        }).join(' '); // LINES 67 -  from the response, we pull the DAILY array of info, then map through it for the first 3 days, .join(' ') merges the strings together to create inner HTML
    },
};
=======
>>>>>>> Stashed changes

//  const app = {
//     init: () => {
//         document
//             .getElementById(/**INSERT *ID TAG* FOR GET WEATHER FORECAST FEATURE*/)
//             .addEventListener('click' , app.fetchWeather);
//         document
//             .getElementById(/**INSERT *ID TAG* FOR CURRENT WEATHER*/)
//             .addEventListener('click' , app.getLocation);
//     },
//     fetchWeather: (ev) => {
//         //use the values from latitude and longitude to fetch the weather
//         let lat = document.getElementById('latitude').value;
//         let lon = document.getElementById('longitude').value
//         let key = '8386a687f2f5376a7e8ca545f6bbc2a7';
//         let lang = 'en'; 
//         let units = 'imperial'; // could use Standard(Kelvin), Metric, or Imperial
//         let url = 'http://api.openweathermap.org/data/2.5/onecall?';
//         //fetches weather information, following functions determine how it is used
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
//         document.getElementById('longitude').value=
//             position.coords.longitude.toFixed(2);
//     },
//     wtf: (err) => {
//         console.log('there was an error')
//     },
//     showWeather: (resp) => {
//     },
// };

// app.init() // starts weather app

const pageLoad = document.getElementByClass('.weather.row') 
inner

<<<<<<< Updated upstream
//PUSHING WHAT I HAVE SO FAR, NOT FINISHED YET
/**
 * https://www.youtube.com/watch?v=nGVoHEZojiQ
 *  - at 15:50 you see an example of ALL the returnable data 
 *    from the JSON file.
 */
=======


//PUSHING WHAT I HAVE SO FAR, NOT FINISHED YET
>>>>>>> Stashed changes
