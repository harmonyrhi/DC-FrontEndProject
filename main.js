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
            .getElementById(/**INSERT *ID TAG* FOR GET WEATHER FORECAST FEATURE*/)
            .addEventListener('click' , app.fetchWeather);
        document
            .getElementById(/**INSERT *ID TAG* FOR CURRENT WEATHER*/)
            .addEventListener('click' , app.getLocation);
    },
    fetchWeather: (ev) => {
        //use the values from latitude and longitude to fetch the weather
        let lat = document.getElementById('latitude').value;
        let lon = document.getElementById('longitude').value
        let key = '8386a687f2f5376a7e8ca545f6bbc2a7';
        let lang = 'en'; 
        let units = 'imperial'; // could use Standard(Kelvin), Metric, or Imperial
        let url = 'http://api.openweathermap.org/data/2.5/onecall?';
        //fetches weather information, following functions determine how it is used
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
        document.getElementById('longitude').value=
            position.coords.longitude.toFixed(2);
    },
    wtf: (err) => {
        console.log('there was an error')
    },
    showWeather: (resp) => {
    },
};

app.init() // starts weather app



//PUSHING WHAT I HAVE SO FAR, NOT FINISHED YET