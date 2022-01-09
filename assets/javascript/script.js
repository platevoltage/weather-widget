const dateEl = document.getElementById('date');
const forecastEl = document.getElementById('forecast');
const previousSearchEl = document.getElementById('previous-search');
const searchEl = document.getElementById('search');
const clearHistoryEl = document.getElementById('clear-history');
const cityEl = document.getElementById('city');
const coordinatesEl = document.getElementById('coordinates');
const weatherEl = document.getElementById('weather');
const weatherIconEl = document.getElementById('weather-icon');
const backgroundImageEl = document.getElementById('background-image');
const temperatureEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const uvIndexEl = document.getElementById('uv-index');

const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat=";
const apiKey = "&units=imperial&appid=5264f5c6cb00caeab126066957171739";

const iconsDay = {
    800 : "<i class='bi bi-brightness-high'></i>",
    801 : "<i class='bi bi-cloud-sun'></i>",
    802 : "<i class='bi bi-cloud'></i>",
    803 : "<i class='bi bi-clouds'></i>",
    804 : "<i class='bi bi-clouds'></i>",
    500 : "<i class='bi bi-cloud-drizzle'></i>",
    501 : "<i class='bi bi-cloud-drizzle'></i>",
    502 : "<i class='bi bi-cloud-rain-heavy'></i>",
    503 : "<i class='bi bi-cloud-rain-heavy'></i>",
    504 : "<i class='bi bi-cloud-rain-heavy'></i>",
    511 : "<i class='bi bi-cloud-sleet'></i>",
    520 : "<i class='bi bi-cloud-drizzle'></i>",
    521 : "<i class='bi bi-cloud-drizzle'></i>",
    522 : "<i class='bi bi-cloud-rain-heavy'></i>",
    531 : "<i class='bi bi-cloud-rain-heavy'></i>",
    300 : "<i class='bi bi-cloud-drizzle'></i>",
    301 : "<i class='bi bi-cloud-drizzle'></i>",
    302 : "<i class='bi bi-cloud-drizzle'></i>",
    310 : "<i class='bi bi-cloud-drizzle'></i>",
    311 : "<i class='bi bi-cloud-drizzle'></i>",
    312 : "<i class='bi bi-cloud-drizzle'></i>",
    313 : "<i class='bi bi-cloud-drizzle'></i>",
    314 : "<i class='bi bi-cloud-drizzle'></i>",
    321 : "<i class='bi bi-cloud-drizzle'></i>",
    200 : "<i class='bi bi-cloud-lightning-rain'></i>",
    201 : "<i class='bi bi-cloud-lightning-rain'></i>",
    202 : "<i class='bi bi-cloud-lightning-rain'></i>",
    210 : "<i class='bi bi-cloud-lightning-rain'></i>",
    211 : "<i class='bi bi-cloud-lightning-rain'></i>",
    212 : "<i class='bi bi-cloud-lightning-rain'></i>",
    221 : "<i class='bi bi-cloud-lightning-rain'></i>",
    230 : "<i class='bi bi-cloud-lightning-rain'></i>",
    231 : "<i class='bi bi-cloud-lightning-rain'></i>",
    232 : "<i class='bi bi-cloud-lightning-rain'></i>",
    701 : "<i class='bi bi-cloud-fog2'></i>",
    711 : "<i class='bi bi-cloud-fog2'></i>",
    721 : "<i class='bi bi-cloud-fog2'></i>",
    731 : "<i class='bi bi-cloud-fog2'></i>",
    741 : "<i class='bi bi-cloud-fog2'></i>",
    751 : "<i class='bi bi-cloud-fog2'></i>",
    761 : "<i class='bi bi-cloud-fog2'></i>",
    762 : "<i class='bi bi-cloud-fog2'></i>",
    771 : "<i class='bi bi-cloud-fog2'></i>",
    781 : "<i class='bi bi-cloud-fog2'></i>",
    600 : "<i class='bi bi-cloud-snow'></i>",
    601 : "<i class='bi bi-cloud-snow'></i>",
    602 : "<i class='bi bi-cloud-snow'></i>",
    611 : "<i class='bi bi-cloud-snow'></i>",
    612 : "<i class='bi bi-cloud-snow'></i>",
    613 : "<i class='bi bi-cloud-snow'></i>",
    615 : "<i class='bi bi-cloud-snow'></i>",
    616 : "<i class='bi bi-cloud-snow'></i>",
    620 : "<i class='bi bi-cloud-snow'></i>",
    621 : "<i class='bi bi-cloud-snow'></i>",
    622 : "<i class='bi bi-cloud-snow'></i>",
};
const iconsNight = {
    800 : "<i class='bi bi-moon-stars'></i>",
    801 : "<i class='bi bi-cloud-moon'></i>",
    802 : "<i class='bi bi-cloud'></i>",
    803 : "<i class='bi bi-clouds'></i>",
    804 : "<i class='bi bi-clouds'></i>",
    500 : "<i class='bi bi-cloud-drizzle'></i>",
    501 : "<i class='bi bi-cloud-drizzle'></i>",
    502 : "<i class='bi bi-cloud-rain-heavy'></i>",
    503 : "<i class='bi bi-cloud-rain-heavy'></i>",
    504 : "<i class='bi bi-cloud-rain-heavy'></i>",
    511 : "<i class='bi bi-cloud-sleet'></i>",
    520 : "<i class='bi bi-cloud-drizzle'></i>",
    521 : "<i class='bi bi-cloud-drizzle'></i>",
    522 : "<i class='bi bi-cloud-rain-heavy'></i>",
    531 : "<i class='bi bi-cloud-rain-heavy'></i>",
    300 : "<i class='bi bi-cloud-drizzle'></i>",
    301 : "<i class='bi bi-cloud-drizzle'></i>",
    302 : "<i class='bi bi-cloud-drizzle'></i>",
    310 : "<i class='bi bi-cloud-drizzle'></i>",
    311 : "<i class='bi bi-cloud-drizzle'></i>",
    312 : "<i class='bi bi-cloud-drizzle'></i>",
    313 : "<i class='bi bi-cloud-drizzle'></i>",
    314 : "<i class='bi bi-cloud-drizzle'></i>",
    321 : "<i class='bi bi-cloud-drizzle'></i>",
    200 : "<i class='bi bi-cloud-lightning-rain'></i>",
    201 : "<i class='bi bi-cloud-lightning-rain'></i>",
    202 : "<i class='bi bi-cloud-lightning-rain'></i>",
    210 : "<i class='bi bi-cloud-lightning-rain'></i>",
    211 : "<i class='bi bi-cloud-lightning-rain'></i>",
    212 : "<i class='bi bi-cloud-lightning-rain'></i>",
    221 : "<i class='bi bi-cloud-lightning-rain'></i>",
    230 : "<i class='bi bi-cloud-lightning-rain'></i>",
    231 : "<i class='bi bi-cloud-lightning-rain'></i>",
    232 : "<i class='bi bi-cloud-lightning-rain'></i>",
    701 : "<i class='bi bi-cloud-fog2'></i>",
    711 : "<i class='bi bi-cloud-fog2'></i>",
    721 : "<i class='bi bi-cloud-fog2'></i>",
    731 : "<i class='bi bi-cloud-fog2'></i>",
    741 : "<i class='bi bi-cloud-fog2'></i>",
    751 : "<i class='bi bi-cloud-fog2'></i>",
    761 : "<i class='bi bi-cloud-fog2'></i>",
    762 : "<i class='bi bi-cloud-fog2'></i>",
    771 : "<i class='bi bi-cloud-fog2'></i>",
    781 : "<i class='bi bi-cloud-fog2'></i>",
    600 : "<i class='bi bi-cloud-snow'></i>",
    601 : "<i class='bi bi-cloud-snow'></i>",
    602 : "<i class='bi bi-cloud-snow'></i>",
    611 : "<i class='bi bi-cloud-snow'></i>",
    612 : "<i class='bi bi-cloud-snow'></i>",
    613 : "<i class='bi bi-cloud-snow'></i>",
    615 : "<i class='bi bi-cloud-snow'></i>",
    616 : "<i class='bi bi-cloud-snow'></i>",
    620 : "<i class='bi bi-cloud-snow'></i>",
    621 : "<i class='bi bi-cloud-snow'></i>",
    622 : "<i class='bi bi-cloud-snow'></i>",
};




var weatherData = new Object();
var date = moment();
var previousSearchArray = [];
if (localStorage.getItem("previousSearch")) {
    previousSearchArray = JSON.parse(localStorage.getItem("previousSearch"));
}

dateEl.innerHTML = date.format('dddd, MMMM Do YYYY');
forecastEl.children[0].children[0].children[0].innerHTML = "Tomorrow";
forecastEl.children[1].children[0].children[0].innerHTML = date.add(2,'days').format('dddd');
forecastEl.children[2].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[3].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[4].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');


if (previousSearchArray.length > 0) {
    weatherFetch(weatherURL + previousSearchArray[0] + apiKey);
} else {
    weatherFetch(weatherURL + "San Francisco" + apiKey);
}

updatePreviousSearch();

function updatePreviousSearch() {
    for (var i = 0; i < previousSearchArray.length; i++) {
        let newSave = document.createElement("button");
        newSave.innerHTML = previousSearchArray[i];
        previousSearchEl.appendChild(newSave);
    }
}

searchEl.addEventListener('submit', function(event) {

    let search = document.getElementById("user-search");
    let newSave = document.createElement("button");
    
    event.preventDefault();
    if (search.value) {
        previousSearchArray.unshift(search.value);
        newSave.innerHTML = search.value;
        previousSearchEl.insertBefore(newSave, previousSearchEl.firstChild);
        
        if (previousSearchArray.length > 8) {
            previousSearchArray.pop();
            previousSearchEl.removeChild(previousSearchEl.lastChild);
        } else {

        }
        weatherFetch(weatherURL + search.value + apiKey);
        
        
        
        search.value = "";
        
    }
  });

  previousSearchEl.addEventListener("click", function(event) {
    weatherFetch(weatherURL + event.target.textContent + apiKey);
  });
  clearHistoryEl.addEventListener("click", function() {
    previousSearchArray = [];
    localStorage.removeItem("previousSearch");
    previousSearchEl.innerHTML = "";
  });

  


  function weatherFetch(requestUrl) {
 
    fetch(requestUrl)
      .then(function (response) {
        if (response.status === 200) {
            return response.json();
        } else {
            return false;
        }
      })
      .then(function (data) {
        if (data) {
            console.log(data);
            var lat = data.coord.lat;
            var lon = data.coord.lon;
            cityEl.textContent = data.name;
            coordinatesEl.textContent = lat + ", " + lon;
            weatherFetch2(oneCallURL + lat + "&lon=" + lon + apiKey);
            localStorage.setItem("previousSearch", JSON.stringify(previousSearchArray) );
        } else { // error handling
            cityEl.textContent = "Error - Invalid City";
            previousSearchArray.splice(0, 1);
            previousSearchEl.removeChild(previousSearchEl.firstChild);
            setTimeout(function () {
                if (previousSearchArray.length) cityEl.textContent = previousSearchArray[0];
                else cityEl.textContent = "San Francisco";
            },2000);
        }
      });
  }
  function weatherFetch2(requestUrl) {
 
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log();
            let uvIndex = data.current.uvi;
            let night = (data.current.weather[0].icon[2] == 'n');

           
            weatherEl.textContent = data.current.weather[0].main;
            if (night) {
                weatherIconEl.innerHTML = iconsNight[data.current.weather[0].id];
                backgroundImageEl.innerHTML = iconsNight[data.current.weather[0].id];
            } else {
                weatherIconEl.innerHTML = iconsDay[data.current.weather[0].id];
                backgroundImageEl.innerHTML = iconsDay[data.current.weather[0].id];
            }
            

            temperatureEl.textContent = Math.round( data.current.temp ) + "°F";
            humidityEl.textContent = data.current.humidity + "%";
            windSpeedEl.textContent = Math.round( data.current.wind_speed ) + " mph";
            uvIndexEl.textContent = uvIndex;

            switch (Math.round(uvIndex)) {
                case 0:
                case 1:
                case 2: {
                    uvIndexEl.style.backgroundColor = "#00ff0088";
                    break;
                }
                case 3:
                case 4:
                case 5: {
                    uvIndexEl.style.backgroundColor = "#ffff0088";
                    break;
                }
                case 6:
                case 7: {
                    uvIndexEl.style.backgroundColor = "#ff990088";
                    break;
                }
                case 8: 
                case 9: 
                case 10: {
                    uvIndexEl.style.backgroundColor = "#ff000088";
                    break;
                }
                default: {
                    uvIndexEl.style.backgroundColor = "#ff00ff88";
                    
                }

            }
       
          
    
            for (var i=0; i < 5; i++) {
                forecastEl.children[i].children[0].children[1].innerHTML = iconsDay[data.hourly[i+1].weather[0].id];
                forecastEl.children[i].children[0].children[2].children[0].innerHTML = Math.round( data.hourly[i+1].temp ) + "°F";
                forecastEl.children[i].children[0].children[2].children[1].innerHTML = Math.round( data.hourly[i+1].humidity ) + "%";
            }

        });
  }


