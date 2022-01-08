const dateEl = document.getElementById('date');
const forecastEl = document.getElementById('forecast');
// console.log(header);

var date = moment();

dateEl.innerHTML = date.format('dddd, MMMM Do YYYY');

forecastEl.children[1].innerHTML = date.add(2,'days').format('dddd');
forecastEl.children[2].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[3].innerHTML = date.add(1,'days').format('dddd');
forecastEl.children[4].innerHTML = date.add(1,'days').format('dddd');