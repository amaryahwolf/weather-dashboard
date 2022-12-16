// Base weather URL
// var weatherUrlBase = api.openweathermap.org/data/2.5/forecast?q={city name}&appid=9c63818d2a58372824ad020aa4224924

// Global variables
var submitBtn = document.querySelector('#submit-btn');
var searchInputVal = document.querySelector('#city-input').value;
var weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchInputVal + '&appid=9c63818d2a58372824ad020aa4224924';

// Function for search bar
function runWeatherSearch(event) {
    event.preventDefault();
// Clear innerHTML after searching 
    console.log(searchInputVal);

// Fetch data from weather api given the city name entered
    fetch(weatherUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
 // Loop through data and generate current weather with city.name, temperature, feels_like, temp_min, temp_max, weather icon
//  Create, set & append elements
 // Loop through data and generate 5-day forecast with temperature, temp_min, temp_max, weather icon
//  Create, set & append elements
    });  
  }

// Add local storage function to store names of cities searched - display under search bar and retrieve weather data when clicked  
  
  submitBtn.addEventListener('click', runWeatherSearch);




// Function to log London's weather
  var londonWeatherUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=9c63818d2a58372824ad020aa4224924'
  console.log(londonWeatherUrl)

  fetch(londonWeatherUrl)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      console.log(data)
  });
