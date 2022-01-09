const dateEl = document.getElementById('date');
const forecastEl = document.getElementById('forecast');
const previousSearchEl = document.getElementById('previous-search');
const searchEl = document.getElementById('search');
const cityEl = document.getElementById('city');
const temperatureEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const uvIndexEl = document.getElementById('uv-index');


const icons = {
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


const weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat="
const fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q="
const apiKey = "&units=imperial&appid=5264f5c6cb00caeab126066957171739"

var weatherData = new Object();
var date = moment();
var previousSearchArray = [];
if (localStorage.getItem("previousSearch")) {
    previousSearchArray = JSON.parse(localStorage.getItem("previousSearch"));
}
// var previousSearchArray = ["San Francisco", "Richmond, VA"]


// console.log(JSON.parse(localStorage.getItem("previousSearch")));
dateEl.innerHTML = date.format('dddd, MMMM Do YYYY');



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
    // console.log(search.value);
    if (search.value) {
        previousSearchArray.unshift(search.value);
        newSave.innerHTML = search.value;
        previousSearchEl.insertBefore(newSave, previousSearchEl.firstChild);
        
        if (previousSearchArray.length > 8) {
            previousSearchArray.pop();
            previousSearchEl.removeChild(previousSearchEl.lastChild);
        } else {

        }
        weatherFetch(fiveDayURL + search.value + apiKey);
        // weatherFetch(weatherURL + search.value + apiKey);
        localStorage.setItem("previousSearch", JSON.stringify(previousSearchArray) );
        
        
        search.value = "";
        
        
        // console.log(weatherData);
    }
  });


  


  function weatherFetch(requestUrl) {
 
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var lat = data.city.coord.lat;
        var lon = data.city.coord.lon;
        var fiveDayForecast = [
            {
                weather: data.list[0].weather[0].id,
                temp: data.list[0].main.temp,
                humidity: data.list[0].main.humidity
            },{
                weather: data.list[8].weather[0].id,
                temp: data.list[8].main.temp,
                humidity: data.list[8].main.humidity
            },{
                weather: data.list[16].weather[0].id,
                temp: data.list[16].main.temp,
                humidity: data.list[16].main.humidity
            },{
                weather: data.list[24].weather[0].id,
                temp: data.list[24].main.temp,
                humidity: data.list[24].main.humidity
            },{
                weather: data.list[32].weather[0].id,
                temp: data.list[32].main.temp,
                humidity: data.list[32].main.humidity
            }, 
        ];


        cityEl.textContent = data.city.name;
        temperatureEl.textContent = data.list[0].main.temp;
        humidityEl.textContent = data.list[0].main.humidity;
        windSpeedEl.textContent = data.list[0].wind.speed + " mph";
      

        console.log(data.list[0].weather[0].id); 
        console.log(data.list[0].dt_txt); //date
        console.log(data.list[0].weather[0].description); //condition
        console.log(data.list[0].main.temp); //temp
        console.log(data.list[0].main.humidity); //humidity
        console.log(data.list[8].dt_txt); //date
        console.log(data.list[8].weather[0].description); //condition
        console.log(data.list[8].main.temp); //temp
        console.log(data.list[8].main.humidity); //humidity
        console.log(data.list[16].dt_txt); //date
        console.log(data.list[16].weather[0].description); //condition
        console.log(data.list[16].main.temp); //temp
        console.log(data.list[16].main.humidity); //humidity
        console.log(data.list[24].dt_txt); //date
        console.log(data.list[24].weather[0].description); //condition
        console.log(data.list[24].main.temp); //temp
        console.log(data.list[24].main.humidity); //humidity
        console.log(data.list[32].dt_txt); //date
        console.log(data.list[32].weather[0].description); //condition
        console.log(data.list[32].main.temp); //temp
        console.log(data.list[32].main.humidity); //humidity
        console.log(data.list[39].dt_txt); //date
        console.log(data.list[39].weather[0].description); //condition
        console.log(data.list[39].main.temp); //temp
        console.log(data.list[39].main.humidity); //humidity

        forecastEl.children[0].children[0].children[0].innerHTML = "Tomorrow";
        forecastEl.children[0].children[0].children[1].innerHTML = icons[fiveDayForecast[0].weather];
        forecastEl.children[0].children[0].children[2].innerHTML = fiveDayForecast[0].temp;

        forecastEl.children[1].children[0].children[0].innerHTML = date.add(2,'days').format('dddd');
        forecastEl.children[1].children[0].children[1].innerHTML = icons[fiveDayForecast[1].weather];;
        forecastEl.children[1].children[0].children[2].innerHTML = fiveDayForecast[1].temp;

        forecastEl.children[2].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
        forecastEl.children[2].children[0].children[1].innerHTML = icons[fiveDayForecast[2].weather];;
        forecastEl.children[2].children[0].children[2].innerHTML = fiveDayForecast[2].temp;

        forecastEl.children[3].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
        forecastEl.children[3].children[0].children[1].innerHTML = icons[fiveDayForecast[3].weather];;
        forecastEl.children[3].children[0].children[2].innerHTML = fiveDayForecast[3].temp;

        forecastEl.children[4].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
        forecastEl.children[4].children[0].children[1].innerHTML = icons[fiveDayForecast[4].weather];;
        forecastEl.children[4].children[0].children[2].innerHTML = fiveDayForecast[4].temp;


        weatherFetch2(oneCallURL + lat + "&lon=" + lon + apiKey);

      });
  }
  function weatherFetch2(requestUrl) {
 
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("data",data)
        uvIndexEl.textContent = data.current.uvi;
      });
  }


// forecastEl.children[0].children[0].children[0].innerHTML = "Tomorrow";
// forecastEl.children[0].children[0].children[1].innerHTML = iconSleet;
// forecastEl.children[1].children[0].children[0].innerHTML = date.add(2,'days').format('dddd');
// forecastEl.children[1].children[0].children[1].innerHTML = iconSleet;
// forecastEl.children[2].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
// forecastEl.children[2].children[0].children[1].innerHTML = iconSleet;
// forecastEl.children[3].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
// forecastEl.children[3].children[0].children[1].innerHTML = iconSleet;
// forecastEl.children[4].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
// forecastEl.children[4].children[0].children[1].innerHTML = iconSleet;


// forecastEl.children[1].innerHTML = "<span>"+date.add(2,'days').format('dddd')+"</span>";
// forecastEl.children[2].innerHTML = date.add(1,'days').format('dddd');
// forecastEl.children[3].innerHTML = date.add(1,'days').format('dddd');
// forecastEl.children[4].innerHTML = date.add(1,'days').format('dddd');

