// Base weather URL
// var weatherUrlBase = api.openweathermap.org/data/2.5/forecast?q={city name}&appid=9c63818d2a58372824ad020aa4224924

// Global variables
var submitBtn = document.querySelector('#submit-btn');
var currentWeatherCard = document.querySelector('#current-weather');

// Function for search bar
function runWeatherSearch(event) {
    event.preventDefault();

var searchInputVal = document.querySelector('#city-input').value;
var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchInputVal + '&appid=9c63818d2a58372824ad020aa4224924';

// Fetch data from weather api given the city name entered
    fetch(weatherUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
// Print current weather
// City name
        var cityName = document.createElement('h3');
        cityName.textContent = data.city.name;
        currentWeatherCard.appendChild(cityName);
// Date
// Weather Icon
// Avg Temperature
// Wind
// Humidity  
    
// Print 5-day forecast
// Date
// Weather Icon
// High Temp
// Low Temp
// Wind
// Humidity
    });  

}

// Add searchAgain function to clear previous search data

// Add local storage function to store names of cities searched - display under search bar and retrieve weather data when clicked  
  
  submitBtn.addEventListener('click', runWeatherSearch);




