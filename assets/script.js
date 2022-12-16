// Global variables
var submitBtn = document.querySelector('#submit-btn');
var currentWeatherCard = document.querySelector('#current-weather');
var day1Card = document.querySelector('#day1forecast')


// Function to use geocoder API to get lat/lon from city name
function runWeatherSearch(event) {
    event.preventDefault();
    var searchInputVal = document.querySelector('#city-input').value;
    var geocodeUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + searchInputVal + '&appid=9c63818d2a58372824ad020aa4224924'
    fetch(geocodeUrl)
    .then(function (response) {
        return response.json();
    })
    .then (function (data) {
        console.log(data)
        // // City name
        var cityName = document.createElement('h3');
        cityName.textContent = data[0].name;
        currentWeatherCard.appendChild(cityName);

        var latValue = data[0].lat;
        var lonValue = data[0].lon;

        getWeather(latValue, lonValue);
    })
}

// Function to get current day's weather

// Function to add lat/lon to 5-day forecast API call
function getWeather(latValue, lonValue) {
    var weatherUrlBase = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latValue + '&lon=' + lonValue + '&units=imperial&appid=9c63818d2a58372824ad020aa4224924'
    fetch(weatherUrlBase)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            // Date
            var day1Date = document.createElement('p');
            day1Date.textContent = data.list[3].dt_txt.slice(0, 11);
            day1Card.appendChild(day1Date);

            // Weather icon
            var day1IconCode = data.list[3].weather[0].icon;
            var day1IconUrl = 'http://openweathermap.org/img/wn/' + day1IconCode + '@2x.png';
            var day1Icon = document.createElement('img');
            day1Icon.src = day1IconUrl;
            day1Card.appendChild(day1Icon);

            // Temperature
            var day1Temp = document.createElement('p');
            day1Temp.textContent = data.list[3].main.temp + '°F';
            day1Card.appendChild(day1Temp);

            // Wind
            var day1Wind = document.createElement('p');
            day1Wind.textContent = data.list[3].wind.speed + 'MPH';
            day1Card.appendChild(day1Wind);

            // Humidity
            var day1Humidity = document.createElement('p');
            day1Humidity.textContent = data.list[3].main.humidity + '%';
            day1Card.appendChild(day1Humidity);
})
}

// Add searchAgain function to clear previous search data

// Add local storage function to store names of cities searched - display under search bar and retrieve weather data when clicked  
  
  submitBtn.addEventListener('click', runWeatherSearch);




