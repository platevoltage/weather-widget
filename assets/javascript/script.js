const dateEl = document.getElementById('date');
const forecastEl = document.getElementById('forecast');
const previousSearchEl = document.getElementById('previous-search');
const searchEl = document.getElementById('search');
const cityEl = document.getElementById('city');
const temperatureEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const windSpeedEl = document.getElementById('wind-speed');
const uvIndexEl = document.getElementById('uv-index');

const iconRain = "<i class='bi bi-cloud-drizzle'></i>";
const iconPartlySunny = "<i class='bi bi-cloud-sun'></i>";
const iconLightningRain = "<i class='bi bi-cloud-lightning-rain'></i>";
const iconSnow = "<i class='bi bi-cloud-snow'></i>";
const iconSleet = "<i class='bi bi-cloud-sleet'></i>";


const weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=";
const oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat="
const fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q="
const apiKey = "&appid=5264f5c6cb00caeab126066957171739"

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
        
        weatherFetch(weatherURL + search.value + apiKey);
        localStorage.setItem("previousSearch", JSON.stringify(previousSearchArray) );
        
        
        search.value = "";
        
        
        // console.log(weatherData);
    }
  });

  function weatherFetch(requestUrl) {
    let lat;
    let lon;
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("data",data)
        //Loop over the data to generate a table, each table row will have a link to the repo url
        lat = data.coord.lat;
        lon = data.coord.lon;
        cityEl.textContent = data.name;
        temperatureEl.textContent = data.main.temp;
        humidityEl.textContent = data.main.humidity;
        windSpeedEl.textContent = data.wind.speed + " mph";

        // console.log(lat);
        weatherFetch2(oneCallURL + lat + "&lon=" + lon + apiKey);
        weatherFetch3(fiveDayURL + data.name + apiKey);

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

  function weatherFetch3(requestUrl) {
 
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.list[0].weather[0].description); //condition
        console.log(data.list[0].main.temp); //
        console.log(data.list[0].main.humidity); //
        console.log(data.list[6]);
        console.log(data.list[14]);
        console.log(data.list[22]);
        console.log(data.list[30]);
        console.log(data.list[38]);

      });
  }


forecastEl.children[0].children[0].children[0].innerHTML = "Tomorrow";
forecastEl.children[0].children[0].children[1].innerHTML = iconSleet;
forecastEl.children[1].children[0].children[0].innerHTML = date.add(2,'days').format('dddd');
forecastEl.children[1].children[0].children[1].innerHTML = iconSleet;
forecastEl.children[2].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[2].children[0].children[1].innerHTML = iconSleet;
forecastEl.children[3].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[3].children[0].children[1].innerHTML = iconSleet;
forecastEl.children[4].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[4].children[0].children[1].innerHTML = iconSleet;


// forecastEl.children[1].innerHTML = "<span>"+date.add(2,'days').format('dddd')+"</span>";
// forecastEl.children[2].innerHTML = date.add(1,'days').format('dddd');
// forecastEl.children[3].innerHTML = date.add(1,'days').format('dddd');
// forecastEl.children[4].innerHTML = date.add(1,'days').format('dddd');

