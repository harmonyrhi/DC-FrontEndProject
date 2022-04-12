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
        //use the values from latitude and longitude to fetch the weather
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value
        let key = '8386a687f2f5376a7e8ca545f6bbc2a7';
        let lang = 'en'; 
        let units = 'imperial'; // could use Standard(Kelvin), Metric, or Imperial
        let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=${units}&lang=${lang}`;
        //fetches weather information, the variables attached to the end of the URL 
        fetch(url) 
            .then((Response) => {
                if (!resp.ok) throw new Error(Response.statusText)
                return Response.json
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
            return '<p>Day</>';
        }).join(' '); // LINES 67 -  from the response, we pull the DAILY array of info, then map through it for the first 3 days, .join(' ') merges the strings together to create inner HTML
    },
};

app.init() // starts weather app



//PUSHING WHAT I HAVE SO FAR, NOT FINISHED YET
/**
 * https://www.youtube.com/watch?v=nGVoHEZojiQ
 *  - at 15:50 you see an example of ALL the returnable data 
 *    from the JSON file.
 */