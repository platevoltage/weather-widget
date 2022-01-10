# weather-widget

## https://antieatingactivist.github.io/weather-widget/

A simple web app that fetches weather data from Openweathermap.org. Current and 5 day forcast weather data is provided once a city name is entered. A search history is displayed for ease of use and the entire app is mobile responsive.


- Weather data is supplied by fetching data from openweathermap.org

```
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  function weatherFetch(requestUrl) {

    cityEl.textContent = "Loading weather...";
    coordinatesEl.textContent = "";
    fetch(requestUrl)
      .then(function (response) { ...
```

- Icons are provided by Bootstrap icons.

```
const iconsDay = {
    800 : "<i class='bi bi-brightness-high'></i>",
    801 : "<i class='bi bi-cloud-sun'></i>",
    802 : "<i class='bi bi-cloud'></i>",
    ...
```

- It uses the moment.js library for time-based functionality

```
var date = moment();
dateEl.innerHTML = date.format('dddd, MMMM Do YYYY');
forecastEl.children[0].children[0].children[0].innerHTML = "Tomorrow";
forecastEl.children[1].children[0].children[0].innerHTML = date.add(2,'days').format('dddd');
forecastEl.children[2].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[3].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[4].children[0].children[0].innerHTML = date.add(1,'days').format('dddd');

```

<img width="1104" alt="Screen Shot 2022-01-09 at 4 47 00 PM" src="https://user-images.githubusercontent.com/1414728/148708039-be025977-0743-4d47-8c6c-06a8cd90e4ce.png">

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [moment.js](https://momentjs.com)
* [Bootstrap Icons](https://icons.getbootstrap.com)
* [openweathermap.org](https://openweathermap.org)

## Deployed Link

* [https://antieatingactivist.github.io/weather-widget/](https://antieatingactivist.github.io/weather-widget/)


## Authors

Garrett Corbin

- [https://antieatingactivist.github.io/weather-widget//](https://antieatingactivist.github.io/weather-widget/)
- [https://github.com/antieatingactivist/](https://github.com/)
- [https://www.linkedin.com/in/garrett-corbin-7a7777227/](https://www.linkedin.com/)

